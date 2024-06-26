import React, { useState, useEffect } from 'react';
import './CommentSection.css';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const handleCommentChange = (e) => setNewComment(e.target.value);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        text: newComment,
        date: new Date().toLocaleString(),
      };

      const updatedComments = [...comments, comment];
      setComments(updatedComments);
      localStorage.setItem('comments', JSON.stringify(updatedComments));
      setNewComment('');
    }
  };

  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter(comment => comment.id !== id);
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  return (
    <div className="comment-section">
      <h2>Add Tags and Comments</h2>
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add a comment"
          required
        ></textarea>
        <button type="submit">Post Comment</button>
      </form>
      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment.id} className="comment-item">
            <p>{comment.text}</p>
            <span>{comment.date}</span>
            <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
