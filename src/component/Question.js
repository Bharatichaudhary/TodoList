export default function Question() {
    var i=0,score=0;
    var ele = document.getElementsByName('answ');

    const ques = [
        {
            question: "1) In 1768, Captain James Cook set out to explore which ocean?",
            answers: ['Pacific Ocean', 'Atlantic Oceann', 'Indian Ocean', 'Arctic Ocean'],
            correct: "Pacific Ocean",
        },
        {
            question: "2. What is actually electricity?",
            answers: ['A flow of water', 'A flow of air', 'A flow of electrons', 'A flow of atoms'],
            correct: "A flow of electrons",
        },
        {
            question: "3. Which of the following is not an international organisation?",
            answers: ['FIFA', 'NATO', 'ASEAN', 'FBI'],
            correct: "FBI",
        },
        {
            question: "4. Name the highest mountain in Africa?",
            answers: ['Mount Kenya', 'Mount Stanley', 'Mount Kilimanjaro', 'Atlas Mountains'],
            correct: "Mount Kilimanjaro",
        },
        {
            question: "5. Which river is known to be the longest on earth?",
            answers: ['Niger River', 'Lena River', 'Congo River', 'Nile River'],
            correct: "Nile River",
        },
        {
            question: "6. The wind velocity is measured by which instrument?",
            answers: ['Barometer', 'Anemometer', 'Hygrometer', 'Velocity meter'],
            correct: "Anemometer",
        },
        {
            question: "7. The material used in pencil is?",
            answers: ['Graphite', 'Silicon', 'Charcoal', 'Phosphorous'],
            correct: "Graphite",
        },
        {
            question: "8. The New York City was earlier called as?",
            answers: ['New Amsterdam', 'Manhattan City', 'New Hampshire', 'Financial City'],
            correct: "New Amsterdam",
        },
        {
            question: "9. When did the American women won the right to vote?",
            answers: ['1919', '1920', '1922', '1923'],
            correct: "1920",
        },
        {
            question: "10. Name the instrument that is used to detect earthquakes?",
            answers: ['Radiometer', 'Barometer', 'Seismograph', 'Thermometer'],
            correct: "Seismograph",
        },
        {
            question: "11. Name the person who is the first to reach space?",
            answers: ['Valentina Tereshkova', 'Yuri Gagarin', 'Alan Shepard', 'Rakesh Sharma'],
            correct: "Yuri Gagarin",
        }

    ]
    function show(){
        document.getElementById("opt").innerHTML="";
        document.getElementById("button").innerHTML="Your Score is "+score;

    }

    function next(){
        
       
        ele[0].value=ques[i].answers[0];
        ele[1].value=ques[i].answers[1];
        ele[2].value=ques[i].answers[2];
        ele[3].value=ques[i].answers[3];
        for(var j = 0; j < ele.length; j++) {
            if(ele[j].checked){
               // alert(ques[i].correct)
                //alert(ele[j].value)

                if(ele[j].value===ques[i].correct){
                    score++;
                    document.getElementById("score").innerHTML="score="+ score;
                   // document.getElementsByClassName(j).style

                }
                ele[j].checked=false;

            }
            
        }   
        
        i++;       
            document.getElementById("button").innerHTML=ques[i].question;  
            document.getElementById("A").innerHTML=ques[i].answers[0];
            document.getElementById("B").innerHTML=ques[i].answers[1];
            document.getElementById("C").innerHTML=ques[i].answers[2];
           document.getElementById("D").innerHTML=ques[i].answers[3]; 
 
                 
            
    }
   

    return (
        <div className=" box">
            <h1>My Quiz</h1>
            {/*<h6>Questions:</h6>*/}
            <div id="boxx" className="container" >
            <div className="question" id="button">{ques[0].question}</div>
            
            <div id="opt">
            <form className="opts">
               <div className="option 1"> <input type="radio" value={ques[0].answers[0]} name="answ" />
                <label htmlFor="A" id="A">{ques[0].answers[0]}</label><br/></div>
                <div className="option 2"><input type="radio" value={ques[0].answers[1]} name="answ" />
                <label htmlFor="B" id="B">{ques[0].answers[1]}</label><br/></div>
                <div className="option 3">
                <input type="radio" value={ques[0].answers[2]} name="answ" />
                <label htmlFor="C" id="C">{ques[0].answers[2]}</label><br/></div>
                <div className="option 4">
                <input type="radio" value={ques[0].answers[3]} name="answ" />
                <label htmlFor="D" id="D">{ques[0].answers[3]}</label><br/></div>
            </form>
            <button className="submit" onClick={show}>Submit</button>
            <button className="Next" onClick={next}>Next</button><br/>
<div id="score">Score={score}</div>   
            </div>
            </div>

        </div>
    );
}