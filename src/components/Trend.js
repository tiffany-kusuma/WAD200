import "/src/styles/trend.css";

function TrendFunction() {
  return (
    <div className="trend-wrapper">
      <div className="trend">
        <div className="trendheader">
          <h1>What's Happening</h1>
        </div>
        <div className="trendcontent-wrapper">
          <div className="trendcontent">
            <h1>Trending</h1>
            <h2>Zhong Li</h2>
            <p>17.8K Tweets</p>
          </div>
          <div className="trendcontent">
            <h1>Australian Football Team</h1>
            <h2>AFL: Collingwood Magpies vs. Essendon Bombers</h2>
            <p>20.3K Tweets</p>
          </div>
          <div className="trendcontent">
            <h1>Gaming - Trending</h1>
            <h2>#GenshinImpact</h2>
            <p>29.4K Tweets</p>
          </div>
          <div className="trendcontent">
            <h1>News - Live</h1>
            <h2>
              Foot-and-mouth disease outbreak in Indonesia prompts concerns in
              Australia and New Zealand
            </h2>
            <p>Trending in Indonesia</p>
          </div>
          <div className="trendcontent">
            <li>Show More</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendFunction;
