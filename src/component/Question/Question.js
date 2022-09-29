import React from 'react';

const Question = () => {
    return (
        <div className=''>
            <h3>It’s a library. For building user interfaces. This is perfect because, more often than not, this is all we want. The best part about this description is that it highlights React’s simplicity. It’s not a mega framework. It’s not a full-stack solution that’s going to handle everything from the database to real-time updates over web socket connections. We don’t actually want most of these pre-packaged solutions, because in the end, they usually cause more problems than they solve. Facebook sure did listen to what we want.</h3>
            <br />
            <br />
            <h3>State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function.

Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props. They are equivalent to function parameters.</h3>
            <br />
            <br />
            <h3>useEffect Some examples of side effects are: fetching data, directly updating the DOM, and timers.</h3>
        </div>


    );
};

export default Question;