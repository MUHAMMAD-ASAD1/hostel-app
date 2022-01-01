import hostelApplicationModel from "../models/hostelApplication.js";

export const getApplicationById = async (req, res) => {
    try {
        const hostelApplications = await hostelApplicationModel.findById(req.params.id);
        res.json(hostelApplications);
    } catch (error) {
        console.log("Not found any data.");
        res.json([]);
    }
};

export const getApplications = async (req, res) => {
    try {
        const hostelApplications = await hostelApplicationModel.find();
        res.json(hostelApplications);
    } catch (error) {
        console.log("Not found any data.");
        res.json({});
    }
};

export const createApplication = async (req, res) => {
    const studentName = req.body.studentName;
    const studentNameInStringFormat = studentName.toString();

    const registrationNumber = req.body.registrationNumber;
    const registrationNumberInString = registrationNumber.toString();

    const newApplicant = new hostelApplicationModel({
        studentName: studentNameInStringFormat,
        registrationNumber: registrationNumberInString
    });

    try {
        await newApplicant.save();
        res.json(newApplicant);
    } catch (error) {
        console.log("Not saved...");
        res.json({});
    }
};

export const updateApplicationById = async (req, res) => {
    const studentName = req.body.studentName;
    const studentNameInStringFormat = studentName.toString();

    const registrationNumber = req.body.registrationNumber;
    const registrationNumberInString = registrationNumber.toString();

    try {
        const hostelApplications = await hostelApplicationModel.findById(req.params.id);
        hostelApplications.studentName = studentNameInStringFormat;
        hostelApplications.registrationNumber = registrationNumberInString;
        await hostelApplications.save()
        res.json(hostelApplications);
    } catch (error) {
        console.log(error.message);
        console.log("Not found any data.");
        res.json({});
    }
};

export const deleteApplicationById = async (req, res) => {
    try {
        const hostelApplications = await hostelApplicationModel.findById(req.params.id);
        await hostelApplications.delete();
        res.json(hostelApplications);
    } catch (error) {
        console.log("Not found any data.");
        res.json({});
    }
};
