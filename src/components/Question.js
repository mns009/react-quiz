import Options from "./Options";
function Question({ question, dispatch, answer }) {
  console.log(question);
  return <Options question={question} dispatch={dispatch} answer={answer} />;
}

export default Question;
