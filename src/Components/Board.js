import React, {Component} from "react";

const board = [];

class Board extends Component {
    constructor() {
        super();
        this.state = {
            isUser : false,
        }
    }
    render() {
        return(
            <div className=" h-full content-center">
                <div className="grid grid-rows-3 grid-flow-col gap-2 w-96 h-96 mx-auto my-20">
                    <button className="box">{board[0]}</button>
                    <button className="box">{board[1]}</button>
                    <button className="box">{board[2]}</button>
                    <button className="box">{board[3]}</button>
                    <button className="box">{board[4]}</button>
                    <button className="box">{board[5]}</button>
                    <button className="box">{board[6]}</button>
                    <button className="box">{board[7]}</button>
                    <button className="box">{board[8]}</button>
                </div>
                <div className="flex mx-auto">
                <button className="w-40 h-16 bg-green-600 text-white text-xl font-bold mx-auto rounded-md hover:bg-green-700">Play!</button>
                </div>

                <footer className="bg-sky-900 w-full h-10 fixed bottom-0 left-0 p-2 px-16">
                <p className="text-md font-medium text-pink-300 flex flex-row-reverse">ₓₒₓₒ♡</p>
                </footer>
            </div>
        );
    }
}

export default Board; 