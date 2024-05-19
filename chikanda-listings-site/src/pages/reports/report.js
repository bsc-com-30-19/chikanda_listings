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

            </div>

          );
};

export default Report;
