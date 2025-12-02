import "./SizeChart.css";
import { Link } from "react-router-dom";

function SizeChart() {
    return (
        <div className="SizeChartWrapper">
            <h1>Size Chart</h1>

            <Link to="/Shop" className="SZ-home">Shop</Link>

            <div className="SizeChartSection">
                <div className="SizeTables">
                    <div className="TableGroup">
                        <h2>Top</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>UK</th>
                                    <th>Size</th>
                                    <th>Shoulder</th>
                                    <th>Length</th>
                                    <th>Bust</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>6</td>
                                    <td>XS</td>
                                    <td>32.5</td>
                                    <td>52</td>
                                    <td>74</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>S</td>
                                    <td>33.5</td>
                                    <td>53</td>
                                    <td>78</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>M</td>
                                    <td>34.5</td>
                                    <td>54</td>
                                    <td>82</td>
                                </tr>
                                <tr>
                                    <td>12/14</td>
                                    <td>L</td>
                                    <td>35.5</td>
                                    <td>55.5</td>
                                    <td>88</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="TableGroup">
                        <h2>Trouser</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>UK</th>
                                    <th>Size</th>
                                    <th>Length</th>
                                    <th>Waist</th>
                                    <th>Hip</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>6</td>
                                    <td>XS</td>
                                    <td>102.5</td>
                                    <td>63</td>
                                    <td>99</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>S</td>
                                    <td>103.5</td>
                                    <td>67</td>
                                    <td>103</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>M</td>
                                    <td>104.5</td>
                                    <td>71</td>
                                    <td>107</td>
                                </tr>
                                <tr>
                                    <td>12/14</td>
                                    <td>L</td>
                                    <td>105</td>
                                    <td>77</td>
                                    <td>113</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="SizeChartSection">
                <img src="/IndulgeWebsite/B05/B05.1.jpg" alt="Blouse & Trouser" />
                <div className="SizeTables">
                    <div className="TableGroup">
                        <h2>Blouse Size</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Size</th>
                                    <th>Shoulder</th>
                                    <th>Length</th>
                                    <th>Bust</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>S</td><td>40</td><td>65</td><td>98</td></tr>
                                <tr><td>M</td><td>41</td><td>66.5</td><td>104</td></tr>
                                <tr><td>L</td><td>42</td><td>68.5</td><td>110</td></tr>
                                <tr><td>XL</td><td>43</td><td>70</td><td>116</td></tr>
                                <tr><td>XXL</td><td>44</td><td></td><td></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="TableGroup">
                        <h2>Trouser</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Size</th>
                                    <th>Size (cm)</th>
                                    <th>Waist</th>
                                    <th>Hip</th>
                                    <th>Thigh</th>
                                    <th>Inseam</th>
                                    <th>Rise</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>S</td>
                                    <td>27</td>
                                    <td>70.5</td>
                                    <td>97.5</td>
                                    <td>56.5</td>
                                    <td>74</td>
                                    <td>31.5</td>
                                </tr>
                                <tr>
                                    <td>M</td>
                                    <td>29</td>
                                    <td>75.5</td>
                                    <td>102.5</td>
                                    <td>59.5</td>
                                    <td>75</td>
                                    <td>32.5</td>
                                </tr>
                                <tr>
                                    <td>L</td>
                                    <td>31</td>
                                    <td>80.5</td>
                                    <td>107.5</td>
                                    <td>59.5</td>
                                    <td>75</td>
                                    <td>33</td>
                                </tr>
                                <tr>
                                    <td>XL</td>
                                    <td>33</td>
                                    <td>85.5</td>
                                    <td>112.5</td>
                                    <td>65.5</td>
                                    <td>77</td>
                                    <td>34</td>
                                </tr>
                                <tr>
                                    <td>XXL</td>
                                    <td>34</td>
                                    <td>88</td>
                                    <td>115</td>
                                    <td>67</td>
                                    <td>77</td>
                                    <td>35</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="SizeChartSection">
                <img src="/IndulgeWebsite/B01/B01.2.jpg" alt="Top & Trouser" />
                <div className="SizeTables">
                    <div className="TableGroup">
                        <h2>Top</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Size</th>
                                    <th>Shoulder</th>
                                    <th>Length</th>
                                    <th>Bust</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>XS</td>
                                    <td>39</td>
                                    <td>64</td>
                                    <td>94</td>
                                </tr>
                                <tr>
                                    <td>S</td>
                                    <td>40</td>
                                    <td>65</td>
                                    <td>98</td>
                                </tr>
                                <tr>
                                    <td>M</td>
                                    <td>41</td>
                                    <td>66.5</td>
                                    <td>104</td>
                                </tr>
                                <tr>
                                    <td>L</td>
                                    <td>42</td>
                                    <td>68</td>
                                    <td>110</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="TableGroup">
                        <h2>Trouser</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Size</th>
                                    <th>Length</th>
                                    <th>Waist</th>
                                    <th>Hip</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>XS</td>
                                    <td>101</td>
                                    <td>66</td>
                                    <td>90</td>
                                </tr>
                                <tr>
                                    <td>S</td>
                                    <td>102.5</td>
                                    <td>70</td>
                                    <td>94</td>
                                </tr>
                                <tr>
                                    <td>M</td>
                                    <td>104</td>
                                    <td>72</td>
                                    <td>98</td>
                                </tr>
                                <tr>
                                    <td>L</td>
                                    <td>105.5</td>
                                    <td>78</td>
                                    <td>102</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SizeChart;
