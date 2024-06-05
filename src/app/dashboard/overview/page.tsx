// pages/sections/dashboard/overview.tsx
import React from "react";

const PageInfo: React.FC = () => {
  return (
    <div className="overflow-x-auto h-96">
      <table className="table table-pin-rows">
        <thead>
          <tr>
            <th className="text-xl">Page Content</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ant-Man</td>
          </tr>
          <tr>
            <td>Aquaman</td>
          </tr>
          <tr>
            <td>Asterix</td>
          </tr>
          <tr>
            <td>The Atom</td>
          </tr>
          <tr>
            <td>The Avengers</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Stuff: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Dashboard dsjfda;sfjdw</h1>
        <p>This is the overview section of the dashboard.</p>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
        <div className="flex justify-center gap-1 my-1 w-full">
          <kbd className="kbd">q</kbd>
          <kbd className="kbd">w</kbd>
          <kbd className="kbd">e</kbd>
          <kbd className="kbd">r</kbd>
          <kbd className="kbd">t</kbd>
          <kbd className="kbd">y</kbd>
          <kbd className="kbd">u</kbd>
          <kbd className="kbd">i</kbd>
          <kbd className="kbd">o</kbd>
          <kbd className="kbd">p</kbd>
        </div>
        <div className="flex justify-center gap-1 my-1 w-full">
          <kbd className="kbd">a</kbd>
          <kbd className="kbd">s</kbd>
          <kbd className="kbd">d</kbd>
          <kbd className="kbd">f</kbd>
          <kbd className="kbd">g</kbd>
          <kbd className="kbd">h</kbd>
          <kbd className="kbd">j</kbd>
          <kbd className="kbd">k</kbd>
          <kbd className="kbd">l</kbd>
        </div>
        <div className="flex justify-center gap-1 my-1 w-full">
          <kbd className="kbd">z</kbd>
          <kbd className="kbd">x</kbd>
          <kbd className="kbd">c</kbd>
          <kbd className="kbd">v</kbd>
          <kbd className="kbd">b</kbd>
          <kbd className="kbd">n</kbd>
          <kbd className="kbd">m</kbd>
          <kbd className="kbd">/</kbd>
        </div>
        <h1 className="text-2xl font-semibold">Dashboard dsjfda;sfjdw</h1>
        <p>This is the overview section of the dashboard.</p>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
        <div className="flex justify-center gap-1 my-1 w-full">
          <kbd className="kbd">q</kbd>
          <kbd className="kbd">w</kbd>
          <kbd className="kbd">e</kbd>
          <kbd className="kbd">r</kbd>
          <kbd className="kbd">t</kbd>
          <kbd className="kbd">y</kbd>
          <kbd className="kbd">u</kbd>
          <kbd className="kbd">i</kbd>
          <kbd className="kbd">o</kbd>
          <kbd className="kbd">p</kbd>
        </div>
        <div className="flex justify-center gap-1 my-1 w-full">
          <kbd className="kbd">a</kbd>
          <kbd className="kbd">s</kbd>
          <kbd className="kbd">d</kbd>
          <kbd className="kbd">f</kbd>
          <kbd className="kbd">g</kbd>
          <kbd className="kbd">h</kbd>
          <kbd className="kbd">j</kbd>
          <kbd className="kbd">k</kbd>
          <kbd className="kbd">l</kbd>
        </div>
        <div className="flex justify-center gap-1 my-1 w-full">
          <kbd className="kbd">z</kbd>
          <kbd className="kbd">x</kbd>
          <kbd className="kbd">c</kbd>
          <kbd className="kbd">v</kbd>
          <kbd className="kbd">b</kbd>
          <kbd className="kbd">n</kbd>
          <kbd className="kbd">m</kbd>
          <kbd className="kbd">/</kbd>
        </div>
      </div>
      <PageInfo />
    </div>
  );
};

export default Stuff;
