import classes from "./ApartmentItem.module.css";
import Card from "../ui/Card";
import { useState } from "react";
import ApartmentEditCard from "./ApartmentEditCard";
import Backdrop from "./Beckdrop";
import DeleteCard from "../ui/DeleteCard";
import CommentCard from "../comments/CommentCard";
function ApartmentItemHost(props) {
	const [imageNum, setImageNum] = useState(0);
	const [deleteCard, setDeleteCard] = useState(false);
	const [cardIsOpen, setCardIsOpen] = useState(false);
	const [comments, setComments] = useState(false);

	const apartments = props.apartments;
	const setApartments = props.setApartments;
	function moreHandler() {
		setCardIsOpen(true);
	}
	function closeCard() {
		setCardIsOpen(false);
		setComments(false);
	}
	function closeDeleteCard() {
		setDeleteCard(false);
	}
	function openComments() {
		setComments(true);
	}
	function deleteApartment() {
		fetch("http://localhost:1313/apartment/" + props.id, {
			method: "DELETE",
		}).then((res) => {
			if (res.status < 400) {
				setDeleteCard(false);
			}
		});

		let filteredApartments = [...apartments];
		filteredApartments = filteredApartments.filter(
			(apartment) => apartment.id !== props.id
		);
		setApartments(filteredApartments);
	}

	return (
		<li className={classes.item}>
			<Card>
				{props.images.length > 0 && (
					<div className={classes.image}>
						{imageNum !== 0 && (
							<button onClick={(e) => setImageNum(imageNum - 1)}>&lt;</button>
						)}
						<img src={props.images[imageNum].imageURL} alt={props.name} />
						{imageNum !== props.images.length - 1 && (
							<button onClick={(e) => setImageNum(imageNum + 1)}>&gt;</button>
						)}
					</div>
				)}

				<div className={classes.content}>
					<p>
						<b>{props.name}</b>
					</p>
					<address>
						{props.adres + ", " + props.city + ", " + props.country}
					</address>
					<p>
						<b>{props.pricePerNight}$</b>
					</p>
				</div>
				<div className={classes.comments}>
					<h6 onClick={openComments}>Comments</h6>
				</div>

				<div className={classes.actions}>
					<button onClick={moreHandler}>Edit</button>
					<button
						onClick={() => {
							setDeleteCard(true);
						}}
					>
						Delete
					</button>
				</div>
			</Card>
			{cardIsOpen && (
				<ApartmentEditCard
					id={props.id}
					name={props.name}
					images={props.images}
					country={props.country}
					city={props.city}
					adres={props.adres}
					description={props.description}
					pricePerNight={props.pricePerNight}
					destinationType={props.destinationType}
					userId={props.userId}
					onCancle={closeCard}
				/>
			)}
			{cardIsOpen && <Backdrop onCancle={closeCard} />}
			{deleteCard && (
				<DeleteCard
					title="Delete"
					message="Are you sure you want to delete apartment?"
					onCancle={closeDeleteCard}
					onDelete={deleteApartment}
				/>
			)}
			{deleteCard && <Backdrop onCancle={closeDeleteCard} />}
			{comments && <CommentCard id={props.id} onCancle={closeCard} />}
			{comments && <Backdrop onCancle={closeCard} />}
		</li>
	);
}

export default ApartmentItemHost;
