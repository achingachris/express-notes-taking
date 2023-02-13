
const CargoTable = () => {
  return (
<div className="row">
  <div className="col-lg-12">
    <div className="card">
      <div className="card-body">
        <h5 className="pb-3">Most Visited Pages</h5>
        <div className="table-responsive">
          <table id="datatable" className="table table-bordered">
            <thead>
              <tr>
                <th>Page</th>
                <th>Visiteors</th>
                <th>Unique Page Visitors</th>
                <th>Bounce Rate</th>
                <th>Shares</th>
                <th>Countries</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Home And News</td>
                <td>2541</td>
                <td>1214</td>
                <td>42.5%</td>
                <td>6969</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Charts</td>
                <td>1001</td>
                <td>2213</td>
                <td>61.5%</td>
                <td>2154</td>
                <td>16</td>
              </tr>
              <tr>
                <td>Table And News</td>
                <td>5514</td>
                <td>5878</td>
                <td>21.5%</td>
                <td>2201</td>
                <td>02</td>
              </tr>
              <tr>
                <td>Dashboard</td>
                <td>3546</td>
                <td>4521</td>
                <td>54.3%</td>
                <td>2451</td>
                <td>09</td>
              </tr>
              <tr>
                <td>Card.html</td>
                <td>6514</td>
                <td>841</td>
                <td>74.2%</td>
                <td>5101</td>
                <td>14</td>
              </tr>
              <tr>
                <td>Alerts.html</td>
                <td>5422</td>
                <td>6688</td>
                <td>81.9%</td>
                <td>5849</td>
                <td>13</td>
              </tr>
              <tr>
                <td>Tool-tip</td>
                <td>3522</td>
                <td>1204</td>
                <td>11.5%</td>
                <td>3187</td>
                <td>14</td>
              </tr>
              <tr>
                <td>Datatable</td>
                <td>2144</td>
                <td>102</td>
                <td>21.5%</td>
                <td>2201</td>
                <td>02</td>
              </tr>
              <tr>
                <td>Form-Editor</td>
                <td>2001</td>
                <td>8421</td>
                <td>19.1%</td>
                <td>3214</td>
                <td>09</td>
              </tr>
              <tr>
                <td>Calender</td>
                <td>6514</td>
                <td>302</td>
                <td>44.5%</td>
                <td>2039</td>
                <td>21</td>
              </tr>
              <tr>
                <td>Invoice</td>
                <td>3341</td>
                <td>1024</td>
                <td>38.5%</td>
                <td>3401</td>
                <td>18</td>
              </tr>
              <tr>
                <td>Tour.html</td>
                <td>3211</td>
                <td>2230</td>
                <td>38.0%</td>
                <td>8455</td>
                <td>03</td>
              </tr>
              <tr>
                <td>Login And Error</td>
                <td>8879</td>
                <td>998</td>
                <td>21.5%</td>
                <td>2201</td>
                <td>02</td>
              </tr>
              <tr>
                <td>Profile</td>
                <td>2254</td>
                <td>2841</td>
                <td>71.2%</td>
                <td>1444</td>
                <td>09</td>
              </tr>
              <tr>
                <td>Google Map</td>
                <td>55</td>
                <td>520</td>
                <td>23.5%</td>
                <td>9969</td>
                <td>12</td>
              </tr>
            </tbody>
          </table>
          {/* end table */}
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default CargoTable
