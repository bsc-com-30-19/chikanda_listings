export default function ReportC () {
    return (
        <>
        <div class="rounded-lg px-4 py-2">
              <h2 class="mb-2 bg-p_cyan text-left font-bold">Sent Reports and Requests</h2>
              <table class="border-collapse">
                <tbody>
                  <tr>
                    <td class="px-2 py-1 font-bold">Title:</td>
                    <td class="px-2 py-1">A title name here</td>
                    <th class="px-2 py-1" rowspan="3">Status: Pending</th>
                  </tr>
                  <tr>
                    <td class="px-2 py-1">Type:</td>
                    <td class="px-2 py-1">Either Request or Report</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-1">Date sent:</td>
                    <td class="px-2 py-1">xx/xx/xxxx</td>
                  </tr>
                </tbody>
              </table>
            </div>
          
        </>
    )
}