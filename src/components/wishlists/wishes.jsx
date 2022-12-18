import { useState } from "react";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

const userName = pb.authStore.model.username;

export default async function Wishes() {
	try {
		const records = await pb
			.collection("wishes")
			.getFullList(200 /* batch size */, {
				sort: "-created",
			});
	} catch (error) {
		alert("No items found");
	}
	return (
		<>
			<h1>Wishes</h1>
		</>
	);
}
