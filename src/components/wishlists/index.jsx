import { useState } from "react";
import PocketBase from "pocketbase";
import Wishes from "./wishes";

const pb = new PocketBase("http://127.0.0.1:8090");

export default function Wishlists() {
	const [item, setItem] = useState("");
	const [link, setLink] = useState("");
	const [comment, setComment] = useState("");

	const handleItemChange = (event) => {
		setItem(event.target.value);
	};

	const handleLinkChange = (event) => {
		setLink(event.target.value);
	};

	const handleCommentChange = (event) => {
		setComment(event.target.value);
	};

	async function handleNewEntry(event) {
		event.preventDefault();

		const data = {
			item: item,
			link: link,
			comment: comment,
		};

		try {
			await pb.collection("wishes").create(data);
			window.location.pathname = "/Dashboard";
		} catch (error) {
			alert("couldn't add item.");
		}
	}
	return (
		<main className="bg-green-900  h-[calc(100vh-136px)] ">
			<div className="flex items-center justify-center">
				<div className=" bg-red-800 text-white rounded-xl border-neutral-50 border-4 border-solid px-16 py-6 m-8 text-left bg-grey-100 shadow-lg">
					<h2 className="text-2xl font-bold text-center">
						Add items to your wishlist here!
					</h2>
					<form onSubmit={handleNewEntry}>
						<div className="mt-4">
							<div className="mt-4">
								<label className="block">Item:</label>
								<input
									type="text"
									name="item"
									placeholder="What item would you like?"
									className="w-full text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									value={item}
									onChange={handleItemChange}
								/>
							</div>
							<div className="mt-4">
								<label className="block">Link:</label>
								<input
									type="text"
									name="link"
									placeholder="Where can I buy it?"
									className="w-full text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									value={link}
									onChange={handleLinkChange}
								/>
							</div>
							<div className="mt-4">
								<label className="block">Comment:</label>
								<input
									type="text"
									name="comment"
									placeholder="Anything I should know?"
									className="w-full text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									value={comment}
									onChange={handleCommentChange}
								/>
							</div>

							<div className="flex items-baseline justify-center">
								<button
									type="submit"
									className="px-6 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-neutral-50 hover:text-green-600"
								>
									Add to wishlist!
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			{/* beginning of wishlist */}
			<div className="flex flex-col">
				<h2>This is the beginning of your wishlist</h2>
			</div>
		</main>
	);
}
