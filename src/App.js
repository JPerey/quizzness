import { useState, useEffect } from 'react';
import Header from "./components/Header";
import QuizScreen from "./components/QuizScreen";
import Footer from "./components/Footer";
import QuizSelection from "./components/QuizSelection";
import Previous from "./components/Previous";
import './App.css';

const categoryMap = {
  //splash screen should be 5 buttons, 4 rows. last row has 4 buttons
  "General Knowledge": 9,
  "Books" : 10,
  "Films" : 11,
  "Music" : 12,
  "Television" : 14,
  "Video Games" : 15,
  "Board Games" : 16,
  "Science & Nature" : 17,
  "Computers" : 18,
  "Mythology" : 20,
  "Sports" : 21,
  "Goegraphy" : 22,
  "History" : 23,
  "Celebrities" : 26,
  "Animals" : 27,
  "Vehicles" : 28,
  "Comics" : 29,
  "Anime & Manga" : 31,
  "Cartoons": 32, 
}

export default function App() {

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [page,setPage] = useState("splash");
  const [apiURL, setApiURL] = useState("https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple");
  const [showAnswers, setShowAnswers] = useState(false);
  const [quizLength, setQuizLength] = useState(1);
  const [allQuizzes, setAllQuizzes] = useState([]);
  const [quizCategory, setQuizCategory] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  //this changes the quiz category, resets quiz question #
  const handleCategoryChange = (category) => {
    console.log("category: ", category)
    setQuizCategory(category);
    let newAPI_URL = `https://opentdb.com/api.php?amount=10&category=
    ${categoryMap[category]}&difficulty=easy&type=multiple`;
    console.log(newAPI_URL);
    setApiURL(newAPI_URL);
    setPage("quiz");
    setQuizLength(1);
    
  }
  
  console.log("quizCategory: ", quizCategory);
  //this takes answer chosen and checks if it is correct
  const handleAnswer = (answer) =>{
    //check if answer is correct
      if(!showAnswers) {
        if(answer === questions[currentIndex].correct_answer){
          setCorrectAnswers(oldAnswers => [...oldAnswers, answer])
          
        }
    }
  console.log(correctAnswers);
  setShowAnswers(true);

  };

  //final button on quiz. This takes in userQuizInfo and sends to MongoDB to make an entry. Also resets various states.
   const handleSubmit= (e) => {
    e.preventDefault();

    try {
      storeResults();
    } catch(error){
      console.log(error);
    };
    handleSplash();
  }

  async function storeResults() {
    const quiz = await fetch("http://localhost:3001/api/quiz", {
      method: "POST",
      body: JSON.stringify({
        score: `${(correctAnswers.length / questions.length * 100).toFixed(2)}%`,
        quizCategory,
      }),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(res => res.json())
      // .then(res => console.log(res))
      // .catch(err => console.log(err))

      setAllQuizzes([...allQuizzes, quiz]
      );
  }

  // this handles question change
  const handleNextQuestion = () => {
    setShowAnswers(false);
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    setQuizLength(quizLength + 1);
  }

  // changes page to previous quizzes page
  async function handlePrevious() {
    setPage("previous");

  }

  const handleSplash = () => {
    setPage("splash");
    setCurrentIndex(0);
    setQuizLength(1);
    setShowAnswers(false);
    setCorrectAnswers([]);

  }

  useEffect(( category ) =>{
    async function getAppData() {
    const quizzes = await fetch(apiURL)
    .then(res => res.json());
      console.log("heres quizzes: ", quizzes);
      
    const prevQuizzesArray = await fetch("http://localhost:3001/api/quiz")
    .then(res => res.json());
    
    setAllQuizzes(prevQuizzesArray);
    // setState({
    //   quizzes: [...allQuizzes]
    // });

      const questions = quizzes.results.map((question) =>
      ({
        ...question,
        answers:[
          question.correct_answer,
          ...question.incorrect_answers,
        ].sort(() => Math.random() - 0.5),
      
    }));
    setQuestions(questions);

    
    
  }
  getAppData();
  }, [apiURL]);
console.log(apiURL);

// rendering section
  return(

<div>
<Header handlePrevious = { handlePrevious } handleSplash = { handleSplash }/>
  
  {questions.length >0 ? (
    <div className="App">
      <Previous page = { page }  allQuizzes = { allQuizzes }/>

      <QuizSelection categoryMap= { categoryMap } handleCategoryChange = { handleCategoryChange } page = { page }/>

      <QuizScreen showAnswers = { showAnswers } data = { questions[currentIndex] } 
       handleAnswer = { handleAnswer } handleNextQuestion = { handleNextQuestion } 
       handleSubmit = { handleSubmit } quizLength = { quizLength } page = { page } correctAnswers = { correctAnswers }/>

      <Footer />

    </div>
    
  ) : (
    <h2>Loading questions</h2>
  )
  }
  </div>
  )

  
}
