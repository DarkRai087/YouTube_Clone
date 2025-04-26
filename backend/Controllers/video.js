import Video from "../Models/video.js";

export const uploadVideo = async (req, res) => {
    try {
        const { title, description, videoUrl, thumbnailUrl, tags } = req.body;
        const newTags = tags.split(",")
        console.log(newTags)
        console.log(req.userId)
        await Video.create({
            userId: req.userId,
            title,
            description,
            videoUrl,
            thumbnailUrl,
            tags: newTags
        })


        res.status(201).json({
            success: "true",
            msg: "Video Uploaded Successfully"
        })

    }
    catch (error) {
        console.log(error)
        res.status(500).json({

            error: "Internal server error"
        })
    }
}


export const updateViews = async (req, res) => {
    try {

        const views = await Video.updateOne({ _id: req.params.id }, { $inc: { views: 1 } })
        res.json({
            views
        })
    }
    catch (err) {
        res.status(500).json({
            msg: "Internal Server Error"
        })
    }
}



export const getAllVideo = async (req, res) => {

    try {
        const allVideos = await Video.find().populate('userId', "channelName profileUrl userName createdAt name")

        res.status(200).json({
            success: true,
            allVideos
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "Internal Server Error"
        })
    }

}


export const getVideo = async (req, res) => {
    try {
        const videoId = req.params.id;

        const video = await Video.findById(videoId).populate("userId", "channelName profileUrl userName createdAt name")
        res.json({
            success: true,
            video
        })

    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getAllVideosByUserId = async (req, res) => {
    try {
        let userId = req.params.id;
        const video = await Video.find({ userId }).populate("userId", "channelName profileUrl createdAt name");
        res.json({
            success: "true",
            video
        })
        if (!video) {
            res.status(411).json({
                msg: "No videos are added"
            })
        }
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}