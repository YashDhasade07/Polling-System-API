import OptionModel from "../models/options.model.js";

export const deleteOption = async (req, res, next) => {
    try {
        const id = req.params.id;
        let option =await OptionModel.findById(id);
        if(option){
            if(option.vote>0){
                res.status(400).send('connot delete the option if it has any votes'); 
            }else{
                await OptionModel.findByIdAndDelete(id)
                res.status(200).send('option deleted');
            }
        }else{
            res.status(404).send('option not found');
        }
    } catch (error) {
        console.log(error);
        res.status(400).send('something went wrong');
    }
}
export const addVote = async (req, res, next) => {
    try {
        const id = req.params.id;
        let option =await OptionModel.findById(id);
        if(option){
            option.vote = option.vote + 1;
            await option.save()
            res.status(200).send('vote added sucessfully');
        }else{
            res.status(404).send('option not found');
        }
    } catch (error) {
        console.log(error);
        res.status(400).send('something went wrong');
    }
}