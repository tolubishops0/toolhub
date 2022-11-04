import React from "react";
import { HiOutlineFire } from "react-icons/hi";
import "./LeaderBoard.css";

function LeaderBoard() {
  return (
    <div className="leaderboard">
      <div>
        <h1>Leaderboard</h1>
        <p> 2022 Ranking</p>
      </div>

      <div>
        <table>
          <tr height="50px">
            <th width="100px">Rank</th>
            <th width="100px"></th>
            <th width="200px">Names</th>
            <th width="100px">Contributions</th>
            <th width="100px"></th>
          </tr>

          <tr height="80px">
            <td>1</td>
            <td className="rank-img">
              <img
                src={require("../Asset/a.jpg")}
                alt="Vadim"
                width="60px"
                height="60px"
              />
            </td>
            <td>Әужа Уәлі</td>
            <td>48</td>
            <td>
              <HiOutlineFire />
            </td>
          </tr>

          <tr height="80px">
            <td>2</td>
            <td className="rank-img">
              <img
                src={require("../Asset/b.jpg")}
                alt="Sergey"
                width="60px"
                height="60px"
              />
            </td>
            <td>Kristina Kull</td>
            <td>47</td>
            <td>
              <HiOutlineFire />
            </td>
          </tr>

          <tr height="80px">
            <td>3</td>
            <td className="rank-img">
              <img
                src={require("../Asset/c.jpg")}
                alt="afghanhound"
                className="rank-img"
                width="65px"
                height="60px"
              />
            </td>
            <td>Toomas Mihhailov</td>
            <td>45</td>
            <td>
              <HiOutlineFire />
            </td>
          </tr>

          <tr height="80px">
            <td>4</td>
            <td className="rank-img">
              <img
                src={require("../Asset/d.jpg")}
                alt="Alex"
                width="60px"
                height="60px"
              />
            </td>
            <td>Olga Lepp</td>
            <td>44</td>
            <td>
              <HiOutlineFire />
            </td>
          </tr>
          <tr height="80px">
            <td>5</td>
            <td className="rank-img">
              <img
                src={require("../Asset/e.jpg")}
                alt="whippet"
                width="60px"
                height="60px"
              />
            </td>
            <td>Anthony Gomez</td>
            <td>42</td>
            <td>
              <HiOutlineFire />
            </td>
          </tr>
          <tr height="80px">
            <td>6</td>
            <td className="rank-img">
              <img
                src={require("../Asset/f.jpg")}
                alt="JackRussell"
                width="60px"
                height="60px"
              />
            </td>
            <td>Jack Russell </td>
            <td>40</td>
            <td>
              <HiOutlineFire />
            </td>
          </tr>
          <tr height="80px">
            <td>7</td>
            <td className="rank-img">
              <img
                src={require("../Asset/a.jpg")}
                alt="Dalmatian"
                width="60px"
                height="60px"
              />
            </td>
            <td>Obioma Egbochukwu</td>
            <td>38</td>
            <td>
              <HiOutlineFire />
            </td>
          </tr>
          <tr height="80px">
            <td>8</td>
            <td className="rank-img">
              <img
                src={require("../Asset/h.jpg")}
                alt="Dmitry"
                width="60px"
                height="60px"
              />
            </td>
            <td>Dmitry Hopkins</td>
            <td>35</td>
            <td>
              <HiOutlineFire />
            </td>
          </tr>
          <tr height="80px">
            <td>9</td>
            <td className="rank-img">
              <img
                src={require("../Asset/i.jpg")}
                alt="Borzoi"
                width="60px"
                height="60px"
              />
            </td>
            <td>Funmilayo Joshua</td>
            <td>33</td>
            <td>
              <HiOutlineFire />
            </td>
          </tr>
          <tr height="80px">
            <td>10</td>
            <td className="rank-img">
              <img
                src={require("../Asset/j.jpg")}
                alt="Bordercollie"
                width="60px"
                height="60px"
              />
            </td>
            <td>Alexandra Castillo</td>
            <td>30</td>
            <td>
              <HiOutlineFire />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default LeaderBoard;
