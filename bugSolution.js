```javascript
// Correct usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: parseInt('1') } });
//Alternative solution using Number()
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: Number('1') } });
```