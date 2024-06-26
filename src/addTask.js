const { v4 } = require('uuid');

const AWS = require('aws-sdk');

const addTask = async (e) => {
    console.log("Entra a task! carga el pipeline correctamente")

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { title, description } = JSON.parse(e.body);
    const createdAt = new Date();
    const id = v4();

    const newTask = {
        id,
        title,
        description,
        createdAt
    }

    await dynamodb.put({
        TableName: "TaskTable",
        Item: newTask
        
        
    }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify(newTask)
    
    }
}

const addTask2 = async (e) => {
    console.log("Entra a task! carga el pipeline")

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { title, description } = JSON.parse(e.body);
    const createdAt = new Date();
    const id = v4();

    const newTask = {
        id,
        title,
        description,
        createdAt
    }

    await dynamodb.put({
        TableName: "TaskTable",
        Item: newTask
        
        
    }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify(newTask)
    
    }
}

module.exports = {
    addTask,
    addTask2
}