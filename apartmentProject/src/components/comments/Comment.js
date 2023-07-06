import { useEffect, useState } from "react";

function Comment(props) {
	const commentId = props.id;
	const deleteHandler = (e) => {
		e.preventDefault();
		fetch("http://localhost:1314/comment/" + commentId, {
			method: "DELETE",
		}).then((res) => {
			props.delete(true);
		});
	};
	return (
		<li>
			{props.username === props.currentUser ? (
				<h6>User: You</h6>
			) : (
				<h6>User: {props.username}</h6>
			)}
			<p>{props.comment}</p>
			{props.username === props.currentUser && (
				<form onSubmit={deleteHandler}>
					<button type="submit">Delete</button>
				</form>
			)}
		</li>
	);
}

export default Comment;
