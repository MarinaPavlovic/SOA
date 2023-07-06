import { useContext, useEffect, useRef, useState } from "react";
import classes from "./CommentCard.module.css";
import Comment from "./Comment";
import AuthContext from "../../store/auth-contex";
function CommentCard(props) {
	var apartmentId = props.id;
	const [loadedComments, setLoadedComments] = useState([]);
	const newComment = useRef();
	const user = useContext(AuthContext);
	const [reload, setReload] = useState(false);
	useEffect(() => {
		fetch("http://localhost:1314/comment/" + apartmentId)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const comments = [];

				for (const key in data) {
					const comment = {
						id: key,
						...data[key],
					};
					comments.push(comment);
				}
				setReload(false);
				setLoadedComments(comments);
			});
	}, [apartmentId, reload]);

	let content = loadedComments.map((comment) => (
		<Comment
			key={comment.id}
			id={comment.id}
			username={comment.username}
			comment={comment.comment}
			currentUser={user.username}
			delete={(deleteComment) => setReload(deleteComment)}
		/>
	));

	const addComent = (e) => {
		const enteredComment = newComment.current.value;
		const username = user.username;
		e.preventDefault();
		fetch("http://localhost:1314/comment", {
			method: "POST",
			body: JSON.stringify({
				apartmentId: apartmentId,
				username: username,
				comment: enteredComment,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				const comments = loadedComments;
				comments.push(data);
				setLoadedComments(comments);
				setReload(true);
			});
	};

	return (
		<div className={classes.item}>
			{loadedComments.length === 0 && <p>Apartment don't have comments yet.</p>}

			<ul className={classes.comment}>{content}</ul>
			<div>
				<form onSubmit={addComent}>
					<h5>Leave comment:</h5>
					<input type="text" id="comment" required ref={newComment} />
					<button type="submit">Add Comment</button>
				</form>
			</div>
		</div>
	);
}

export default CommentCard;
