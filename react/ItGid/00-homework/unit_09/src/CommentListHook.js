function CommentListHook(props) {
  
  return (
  <>
   <div>
   <h1>Comments</h1>
           {props.prop1.map((el, index) => (
              <section key={el.id}>
                 <p><b>{index + 1}. {el.email}</b></p>
                 <p>{el.body}</p>
              </section>
            ))}
      </div>
  </>
  );
}

export default CommentListHook;
