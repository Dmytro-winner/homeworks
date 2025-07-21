use('studentDB');


db.assignments.insertMany([
    { name: "Олена", subject: "Математика", score: 78 },
    { name: "Ігор", subject: "Фізика", score: 92 },
    { name: "Марія", subject: "Інформатика", score: 88 },
    { name: "Сергій", subject: "Історія", score: 83 },
    { name: "Анна", subject: "Хімія", score: 67 }
]);


db.assignments.find({ score: { $gt: 80 } });


db.assignments.updateOne(
    { score: { $lt: 85 } },
    { $inc: { score: 5 } }
);


db.assignments.deleteOne({ score: 67 });


db.assignments.find({}, { name: 1, score: 1, _id: 0 });