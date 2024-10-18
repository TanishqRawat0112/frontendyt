import hitRequest from "./hitRequest.js";

export const getAllVideos = async () => {
    try {
        const res = await hitRequest("/videos/", "GET");
        return res.data.data; // Assuming res.data contains the videos array
    } catch (error) {
        console.error("Error while fetching Videos", error);
        return null;
    }
}