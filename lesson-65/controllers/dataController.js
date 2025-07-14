


exports.insertOne = async (req, res) => {
    try {
        const doc = await Data.create(req.body);
        res.status(201).json(doc);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Insert Many
exports.insertMany = async (req, res) => {
    try {
        const docs = await Data.insertMany(req.body);
        res.status(201).json(docs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update One
exports.updateOne = async (req, res) => {
    try {
        const { filter, update } = req.body;
        const result = await Data.updateOne(filter, update);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Many
exports.updateMany = async (req, res) => {
    try {
        const { filter, update } = req.body;
        const result = await Data.updateMany(filter, update);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Replace One
exports.replaceOne = async (req, res) => {
    try {
        const { filter, replacement } = req.body;
        const result = await Data.replaceOne(filter, replacement);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete One
exports.deleteOne = async (req, res) => {
    try {
        const { filter } = req.body;
        const result = await Data.deleteOne(filter);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete Many
exports.deleteMany = async (req, res) => {
    try {
        const { filter } = req.body;
        const result = await Data.deleteMany(filter);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Find with Projection
exports.findWithProjection = async (req, res) => {
    try {
        const projection = req.query.projection ? JSON.parse(req.query.projection) : {};
        const filter = req.query.filter ? JSON.parse(req.query.filter) : {};
        const data = await Data.find(filter, projection);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};