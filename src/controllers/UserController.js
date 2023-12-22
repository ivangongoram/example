const User = require('../models/User');
class UserController {
    /**
     * Display a listing of the resource.
     */
    static async index(req, res)
    {
        res.status(200).json({
            "success": true,
            "data": User.table.data
        });
    }

    /**
     * Show the form for creating a new resource.
     */
    static async create(req, res)
    {
        const user = User.create({
            name: req.body.name,
            age: req.body.age
        });
        user.save();

        res.status(200).json({
            "success": true,
            "data": user.get()
        });
    }

    /**
    * Display the specified resource.
    */
    static async show(req, res)
    {
        const user = User.where('id', '=', req.params.id)
        res.status(200).json({
            "success": true,
            "data": user.get()
        });
    }

    /**
    * Update the specified resource in storage.
    */
    static async update(req, res)
    {
        const user = User.where('id', '=', req.params.id)
                        .update(req.body);

        res.status(200).json({
            "success": true,
            "data": user ? "successful" : "Does not exist"
        });
    }

    /**
    * Remove the specified resource from storage.
    */
    static async delete(req, res)
    {
        const user = User.where('id', '=', req.params.id).delete();
        res.status(200).json({
            "success": true,
            "data": user ? "successful" : "Does not exist"
        });
    }
}

module.exports = UserController;