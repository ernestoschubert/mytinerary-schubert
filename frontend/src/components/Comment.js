// const Comment = (props) => {
    
//     return <>
//         <div className="comment" key={i}>
//             <div className="x-alineator">
//                 <div>
//                     <div className="authorComment-img" style={{backgroundImage: `url(${comment.userImg})`}} ></div>
//                 </div>
//                 <div className="commentContent-container">
                    
                
                
//                     <p className={userLogged ? comment.userId === userLogged._id 
//                         ? !isEditingComment ? "comment-author" : "displayNone"
//                         : "comment-author" 
//                     : "comment-author"}>
//                         <strong> {comment.userName}</strong>
//                     </p>
                    
//                     <p className={ userLogged ? comment.userId === userLogged._id
//                         ? !isEditingComment ? "comment-content" : "displayNone"
//                         : "comment-content"
//                     : "comment-content"
//                     } >{comment.comment}</p>
                    
//                     {userLogged && comment.userId === userLogged._id && (
//                         <>
//                         <input type="text" value={editedComment} onChange={(e)=> setEditedComment(e.target.value)} className={isEditingComment ? "editingInput": "displayNone"} />
//                         <IoSend className={isEditingComment ? "sendEditedIcon": "displayNone"} 
//                         onClick={()=>
//                             sendEditedComment(itineraryId, {commentId: comment.userId, newComment: editedComment})} />
//                         </>
//                     )}
//                 </div>

//                 {userLogged && comment.userId === userLogged._id && (
//                     <div className="modifyCommentIcons-container">
//                         <FaRegEdit  onClick={()=> startEditingComment(comment.comment)} className={!isEditingComment ? "edit-icon" : "displayNone"} />
//                         <FaTrashAlt onClick={()=> deleteSingleComment({itineraryId: itineraryId, commentId: comment._id})} className={!isEditingComment ? "delete-icon" : "displayNone"}/>
//                     </div>
//                 )}
//             </div>
//         </div>
//     </>
// }

// export default Comment