import React, { useState, useEffect } from 'react';
import './style.css';
import blueCrystalImage from '../../img/blue-crystal.png';
import greenCrystalImage from '../../img/green-crystal.png';
import redCrystalImage from '../../img/red-crystal.png';
import yellowCrystalImage from '../../img/yellow-crystal.png';

const CrystalCollector = (props) =>
{
    const [numberToWin, setNumberToWin] =     useState(0);
    const [wins, setWins] =                   useState(0);
    const [losses, setLosses] =               useState(0);
    const [redCrystal, setRedCrystal] =       useState();
    const [blueCrystal, setBlueCrystal] =     useState();
    const [yellowCrystal, setYellowCrystal] = useState();
    const [greenCrystal, setGreenCrystal] =   useState();
    const [totalScore, setTotalScore] =       useState(0);
    const [isRepeated, setIsRepeated] =       useState(true);

    useEffect(() =>
    {
        setNumberToWin(targetScore(19, 121));
        generateCrystalValues();
    }, []);

    const targetScore = (min, max) =>
    {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const crystalValueGenerator = (min, max) =>
    {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const generateCrystalValues = () =>
    {
        // while(isRepeated)
        // {
        //     setIsRepeated(false);

            setRedCrystal(crystalValueGenerator(1, 13));
            setBlueCrystal(crystalValueGenerator(1, 13));
            setYellowCrystal(crystalValueGenerator(1, 13));
            setGreenCrystal(crystalValueGenerator(1, 13));

        //     if(redCrystal === blueCrystal || redCrystal === greenCrystal || redCrystal === yellowCrystal)
        //     {
        //         setIsRepeated(true);
        //         console.log("Duplicate1")
        //     }
                
        //     if(blueCrystal === yellowCrystal || blueCrystal === greenCrystal)
        //     {
        //         setIsRepeated(true);
        //         console.log("Duplicate2") 
        //     }
    
        //     if(yellowCrystal === greenCrystal)
        //     {
        //         setIsRepeated(true);
        //         console.log("Duplicate3") 
        //     }
        // }
    }

    const checkScore = () =>
    {
        if(totalScore === numberToWin)
        {
            setWins(wins + 1);
            setNumberToWin(targetScore(19, 121));
            generateCrystalValues();
            setTotalScore(0);
        }

        else if(totalScore > numberToWin)
        {
            setLosses(losses + 1);
            setNumberToWin(targetScore(19, 121));
            generateCrystalValues();
            setTotalScore(0);
        }
    }

    const redCrystalButton = () =>
    {
        setTotalScore(totalScore + redCrystal);
        checkScore();
    }

    const blueCrystalButton = () =>
    {
        setTotalScore(totalScore + blueCrystal);
        checkScore();
    }
    
    const yellowCrystalButton = () =>
    {
        setTotalScore(totalScore + yellowCrystal);
        checkScore();
    }

    const greenCrystalButton = () =>
    {
        setTotalScore(totalScore + greenCrystal);
        checkScore();
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
                    <img className="img-fluid mx-auto image-stuff" src={redCrystalImage} onClick={redCrystalButton} alt="Red Crystal"></img>
                    <div id="redCrystal2" className="text-center crystalNumber">
                        <p>{redCrystal}</p>
                    </div>
                </div>
                <div id="blueCrystal1" className="col-md-3">
                    <img className="img-fluid mx-auto image-stuff" src={blueCrystalImage} onClick={blueCrystalButton} alt="Blue Crystal"></img>
                    <div id="blueCrystal2" className="text-center crystalNumber">
                        <p>{blueCrystal}</p>
                    </div>
                </div>
                <div id="yellowCrystal1" className="col-md-3">
                    <img className="img-fluid mx-auto image-stuff" src={yellowCrystalImage} onClick={yellowCrystalButton} alt="Yellow Crystal"></img>
                    <div id="yellowCrystal2" className="text-center crystalNumber">
                        <p>{yellowCrystal}</p>
                    </div>
                </div>
                <div id="greenCrystal1" className="col-md-3">
                    <img className="img-fluid mx-auto image-stuff" src={greenCrystalImage} onClick={greenCrystalButton} alt="Green Crystal"></img>
                    <div id="greenCrystal2" className="text-center crystalNumber">
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