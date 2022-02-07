import React from 'react';

const Comment = () => {
  return (
    <div className="comment" key={i}>
    <div className="x-alineator">
        <div>
            <div className="authorComment-img" style={{backgroundImage: `url(${comment.userImg})`}} ></div>
        </div>
        <div className="commentContent-container">
            
        
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', maxWidth: '290px'}}>
            <p className="comment-author">
                <strong> {comment.userName}</strong>
            </p>
            {( userLogged && comment.userId === userLogged._id ) && (
                <div className="modifyCommentIcons-container">
                    <FaRegEdit  onClick={()=> startEditingComment(comment.comment, comment._id)} className={!isEditingComment ? "edit-icon" : "displayNone"} />
                    <FaTrashAlt onClick={()=> deleteSingleComment({itineraryId: itineraryId, commentId: comment._id})} className={!isEditingComment ? "delete-icon" : "displayNone"}/>
                </div>
            )}
            </div>

            
            <p className={ !isEditingComment ? "comment-content" : "displayNone" }>
                {comment.comment}
            </p>
            
            {(userLogged && comment.userId === userLogged._id) && (
                <>
                <input type="text" 
                value={commentBeingEdited === comment._id ? editedComment : comment.comment}
                onChange={(e)=> setEditedComment(e.target.value)} className={isEditingComment ? "editingInput": "displayNone"} />
                <IoSend className={isEditingComment ? "sendEditedIcon": "displayNone"} 
                onClick={()=>
                    sendEditedComment(itineraryId, {commentId: comment._id, newComment: editedComment})} />
                </>
            )}
        </div>

        
    </div>
    </div>
  )
};

export default Comment;
