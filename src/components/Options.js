function Options({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option,index) => (
          <button
            className="btn btn-option"
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;
