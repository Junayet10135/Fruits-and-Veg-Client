import React from 'react';

const Blogs = () => {
    return (
        <div className='container' style={{ minHeight: "100vh" }}>
        <h2 className='text-center mt-4 mb-5 section-title p-2'>Blogs</h2>
            <div className='mb-5'>
                <h4 className='mb-4'>Difference between javascript and nodejs</h4>
                <p>
                    <strong>JavaScript</strong> is a language that runs inside web browsers as part of the documents loaded by the browser and is used as a client-side development language. It provides the behavior of the pages. Like HTML it provides the semantic structure and CSS the look and feel. <br />

                    <strong>NodeJs</strong> is an open source, cross-platform environment that allows you to create server-side applications and tools using JavaScript.


                </p>
            </div>
            <div className='mb-5'>
                <h4 className='mb-4'>When should you use nodejs and when should you use mongodb?</h4>
                <p>
                    Mongodb is not accurate for everything but sometimes is best for small applications, with usind node js. Node.js is popularly being used in web applications because it lets the application run while it is fetching data from the backend server. It is asynchronous, event-driven and helps to build scalable web applications. Even though Node.js works well with MySQL database, the perfect combination is a NoSQL like MongoDB wherein the schema need not be well-structured. MongoDB represents the data as a collection of documents rather than tables related by foreign keys. This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node.js. Another option is using CouchDB that also stores the data as JSON/BSON environment.
                </p>
            </div>
            <div>
                <h4 className='mb-4'>Differences between sql and nosql databases.</h4>
                <p>
                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
            </div>
           
        </div>
    );
};

export default Blogs;