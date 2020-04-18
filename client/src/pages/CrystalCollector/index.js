import React, { useState, useEffect } from 'react';
import './style.css';
import blueCrystalImage from '../../img/blue-crystal.png';
import greenCrystalImage from '../../img/green-crystal.png';
import redCrystalImage from '../../img/red-crystal.png';
import yellowCrystalImage from '../../img/yellow-crystal.png';

const CrystalCollector = (props) =>
{
    const [numberToWin, setNumberToWin] =     useState();
    const [wins, setWins] =                   useState(0);
    const [losses, setLosses] =               useState(0);
    const [redCrystal, setRedCrystal] =       useState(0);
    const [blueCrystal, setBlueCrystal] =     useState(0);
    const [yellowCrystal, setYellowCrystal] = useState(0);
    const [greenCrystal, setGreenCrystal] =   useState(0);
    const [totalScore, setTotalScore] =       useState(0);
    const [redOpacity, setRedOpacity] =       useState(0);
    const [blueOpacity, setBlueOpacity] =     useState(0);
    const [yellowOpacity, setYellowOpacity] = useState(0);
    const [greenOpacity, setGreenOpacity] =   useState(0);
    const [timer, setTimer] =                 useState();

    useEffect(() =>
    {
        setNumberToWin(valueGenerator(19, 121));
        generateCrystalValues();
    }, []);

    useEffect(() =>
    {
        checkCrystalValues();
    }, [redCrystal, blueCrystal, yellowCrystal, greenCrystal]);

    useEffect(() =>
    {
        checkScore();
    }, [totalScore]);

    const valueGenerator = (min, max) =>
    {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const generateCrystalValues = () =>
    {
        setRedCrystal(valueGenerator(1, 13));
        setBlueCrystal(valueGenerator(1, 13));
        setYellowCrystal(valueGenerator(1, 13));
        setGreenCrystal(valueGenerator(1, 13));
    }

    const checkCrystalValues = () =>
    {
        if(redCrystal === blueCrystal || redCrystal === greenCrystal || redCrystal === yellowCrystal)
        {
            generateCrystalValues();
            console.log("Duplicate1")
        }
                
        else if(blueCrystal === yellowCrystal || blueCrystal === greenCrystal)
        {
            generateCrystalValues();
            console.log("Duplicate2") 
        }
    
        else if(yellowCrystal === greenCrystal)
        {
            generateCrystalValues();
            console.log("Duplicate3") 
        }
    }

    const checkScore = () =>
    {
        if(totalScore === numberToWin)
        {
            setWins(wins + 1);
            setNumberToWin(valueGenerator(19, 121));
            generateCrystalValues();
            setTotalScore(0);
        }

        else if(totalScore > numberToWin)
        {
            setLosses(losses + 1);
            setNumberToWin(valueGenerator(19, 121));
            generateCrystalValues();
            setTotalScore(0);
        }
    }

    const crystalButton = (value, setFunction) =>
    {
        setTotalScore(totalScore + value);

        setRedOpacity(0);
        setBlueOpacity(0);
        setYellowOpacity(0);
        setGreenOpacity(0);

        setFunction(1);
        clearTimeout(timer);
        setTimer(setTimeout(() => setFunction(0), 1000));
    }

    let content =
    (
        <div className="d-flex flex-column page-content">
            <header>
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light bg-white">
                        <a href="#" className="navbar-brand text text-dark">
                                <h3>Crystal Collector Game</h3>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="../unit-4-game/index.html">Return to Portfolio</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

            <div className="border-under-nav"></div>                

            <div className="row ml-1 mr-1 mb-2">
                <div className="col-md-12 border-bottom">
                    <h3 className="pl-2 pt-2 h3-header">Lets Play!</h3>
                </div>
                <div className="col-md-12 lead pt-1 pb-1">
                    <p>
                        Rules of the game:
                    </p>
                    <p>
                        You will be given a random number to start the game. There are four crystals below. By clicking on a crystal you 
                        will add a specific amount of points to your total score. You win the game by matching your total score using the
                        random numbers generated by each crystal. You lose the game if your total score goes above the generated number.The
                        value of each crystal is hidden from you until you click on it. Each time the game starts, the number needed to win
                        and the value of each crystal will randomly generate.
                    </p>
                </div>
            </div>

            <div className="row ml-1 mr-1 pb-2 pt-1 lead border-top border-bottom">
                <div className="col-md-2">
                    <p id="randomNum">Target Score: {numberToWin}</p>
                </div>
                <div className="col-md-2">
                    <p id="win">Wins: {wins}</p>
                    <p id="loss">Losses: {losses}</p>
                </div>
            </div>

            <div className="row ml-1 mr-1 pt-1 pb-1">
                <div id="redCrystal1" className="col-md-3">
                    <img className="img-fluid mx-auto image-stuff" src={redCrystalImage} onClick={() => crystalButton(redCrystal, setRedOpacity)} alt="Red Crystal"></img>
                    <div id="redCrystal2" className="text-center crystalNumber" style={{opacity: redOpacity}}>
                        <p>{redCrystal}</p>
                    </div>
                </div>
                <div id="blueCrystal1" className="col-md-3">
                    <img className="img-fluid mx-auto image-stuff" src={blueCrystalImage} onClick={() => crystalButton(blueCrystal, setBlueOpacity)} alt="Blue Crystal"></img>
                    <div id="blueCrystal2" className="text-center crystalNumber" style={{opacity: blueOpacity}}>
                        <p>{blueCrystal}</p>
                    </div>
                </div>
                <div id="yellowCrystal1" className="col-md-3">
                    <img className="img-fluid mx-auto image-stuff" src={yellowCrystalImage} onClick={() => crystalButton(yellowCrystal, setYellowOpacity)} alt="Yellow Crystal"></img>
                    <div id="yellowCrystal2" className="text-center crystalNumber" style={{opacity: yellowOpacity}}>
                        <p>{yellowCrystal}</p>
                    </div>
                </div>
                <div id="greenCrystal1" className="col-md-3">
                    <img className="img-fluid mx-auto image-stuff" src={greenCrystalImage} onClick={() => crystalButton(greenCrystal, setGreenOpacity)} alt="Green Crystal"></img>
                    <div id="greenCrystal2" className="text-center crystalNumber" style={{opacity: greenOpacity}}>
                        <p>{greenCrystal}</p>
                    </div>
                </div>
            </div>

            <div className="row ml-1 mr-1 pb-1 lead"></div>

            <div className="row ml-1 mr-1 pt-1 border-top lead">
                <div className="col-md-2">
                    <p id="scoreUpdate">Total Score: {totalScore}</p>
                </div>
            </div>

            <footer id="sticky-footer" className="py-3 bg-dark text-white-50 footer-all">
                <div className="container text-center">
                    <small>Copyright &copy;</small>
                </div>
            </footer>
        </div>
    )
    return content
}

export default CrystalCollector;