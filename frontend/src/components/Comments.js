import { useState } from 'react'
import { connect } from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {FaTrashAlt} from "react-icons/fa"
import {FaRegEdit} from "react-icons/fa"
import {IoSend} from 'react-icons/io5'
import itinerariesActions from '../redux/actions/itinerariesActions';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Swal from 'sweetalert2'


toast.configure()

const Comments = (props)=>{
    const {itineraryId, userLogged, itineraryComments} = props


    const [allComments, setAllComments] = useState(itineraryComments);
    const [commentContent, setCommentContent] = useState('');
    const [isEditingComment, setIsEditingComment] = useState(false);
    const [editedComment, setEditedComment] = useState('');
    const [commentBeingEdited, setCommentBeingEdited] = useState('');

    const sendComment = async() => {
        if(commentContent !== ''){
            setCommentContent('')
            const response = await props.sendComment({ userId: userLogged._id, comment: commentContent, itineraryId}) 
            setAllComments(response.data.response)
        }
    }
        
    const deleteSingleComment_ = async(IDs)=>{
        const response = await props.deleteComment(IDs)
        setAllComments(response)
    }
    
    const deleteSingleComment = async(IDs)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You are going to delete your comment!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteSingleComment_(IDs)
                Swal.fire(
                    'Deleted!',
                    'Your comment has been deleted',
                    'success'
                    )
                }
        })
    }

    const startEditingComment = (value, commentId)=>{
        setIsEditingComment(!isEditingComment)
        setEditedComment(value)
        setCommentBeingEdited(commentId)
    }

    const sendEditedComment = async(itineraryId, commentInfo)=>{
        setIsEditingComment(!isEditingComment)
        const response = await props.editComment(itineraryId, commentInfo)
        setAllComments(response)
    }


    const notify = (error)=>{
        toast.error(`Must be logged to ${error}!`)
    }

   return<>

        <div className="comments-general-container">
            <div className="commentsTittle-container">
                <h1 className="commentsTittle">Comments</h1>
            </div>
            <div className="all-comments-container">
                {allComments.map((comment, i) => {
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
                })}
            </div>
                <div className="input-container">
                    <input type="text" value={commentContent} onChange={(e)=> setCommentContent(e.target.value)} className="comments-input" placeholder="Send comment" />
                    
                    <div className="paperPlane-icon" onClick={userLogged ? sendComment : () => notify('Comment')}>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </div>
                </div>
        </div>
    </>
}

const mapStateToProps = (state)=>{
   return {
      userLogged: state.users.user
   }
}

const mapDispatchToProps = {
   sendComment: itinerariesActions.sendComment,
   deleteComment: itinerariesActions.deleteComment,
   editComment: itinerariesActions.editComment
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)

