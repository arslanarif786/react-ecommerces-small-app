//////*******************//////  props getting here..

const Card = (props) => {
  // console.log(props)
  return (
    <div className="card app-spacing mx-5">
      <span className="title text-lg ml-1" style={{ color: 'darkblue' }}> {props.title} </span>
      <img src={props.image} alt="img" className="img-size" />
      <div className="content text-sm p-1">{props.description}</div>
      <div className="flex justify-between pr-3 mt-3">

       {/********  Conditional Rendering HTML one or more div elements  *******/}
       {/********  Ternary operators here, not v-if directive like in .vue files  *******/}
      {props.favourite ? (
          <div className="latest-badge ml-2 text-sm">{props.favourite}</div>
        ) : (
          <div></div>
        )}
        
        <div className="badge text-sm"> Warrantee </div>
      </div>
    </div>
  );
};

export default Card;
