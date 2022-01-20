import React, {Component} from "react";

class Navbar extends Component {
    render() {
        return (
            <div className=" bg-sky-900 h-22 p-7 px-16 flex content-center">
                <h1 className="text-white text-3xl font-bold flex-1 w-full overflow-visible md:w-max">🤖 Tic Tac Toe</h1>
                <div className="flex w-0 text-white text-lg invisible md:visible md:w-max md:flex-row">     
                    <p className="link px-4">Play Now!</p>
                    <p className="link px-4">About Us</p>
                    <p className="link px-4">Sign Up</p>
                </div>
            </div>
        );
    }
}

export default Navbar; 