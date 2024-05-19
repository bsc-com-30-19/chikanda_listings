// Report.js

import React from 'react';

const Report = () => {
  return (
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">

      <div class="rounded-lg px-4 py-2">
        <table class="border-collapse">
          <h2 class="mb-2 bg-p_cyan text-left font-bold">Make Request or Report</h2>
          <tbody>
            <tr>
              <td class="px-2 py-1">
                <input type="radio" id="option_a" name="my_radio_group" value="Request"/>
                  <label for="option_a">Request</label>
                  <br/>
                    <input type="radio" id="option_b" name="my_radio_group" value="Report"/>
                      <label for="option_b">Report</label>
                    </td>
                  </tr>

                  <tr>
                    <td class="px-2 py-1">Title:
                    </td>
                    <tr>

                      <tr>
                        <td class="px-2 py-1">
                          <input type="text" placeholder="Title here:"/>
                        </td>
                        <tr>


                          <td class="px-2 py-1">

                          </td>
                        </tr>
                        <td class="px-2 py-1">Description:

                        </td>
                      </tr>

                    </tr>
                    <td class="px-2 py-1">
                      <input type="text" placeholder="Provide a description" />
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

            <div class="rounded-lg px-4 py-2">
              <h2 class="mb-2 bg-p_cyan text-left font-bold">Sent Reports and Requests</h2>
              <table class="border-collapse">
                <tbody>
                  <tr>
                    <td class="px-2 py-1">Title:</td>
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
          </div>

          );
};

export default Report;
