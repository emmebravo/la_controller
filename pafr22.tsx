import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import { Expenditures } from '@/components/pafr22visualise/2expen';
import { BondsOverTime } from '@/components/pafr22visualise/bondsovertime';
import { Changeinnetpos } from '@/components/pafr22visualise/changeinnetpos';
import { ChangeinnetposGen } from '@/components/pafr22visualise/changeinnetposgen';
import { CityActivities } from '@/components/pafr22visualise/cityactivities';
import CityRevenue from '@/components/pafr22visualise/cityrevenue';
import { Credit } from '@/components/pafr22visualise/credit';
import { Demographics } from '@/components/pafr22visualise/demo';
import { Employers } from '@/components/pafr22visualise/employers';
import { GeneralExpenditures } from '@/components/pafr22visualise/generalexpen';
import { GeneralRevenue } from '@/components/pafr22visualise/generalrev';
import Seo from '@/components/Seo';
export default function pafr22(props: any) {
  return (
    <>
      <Navbar />
      <Seo
        title='Popular Annual Financial Report FY22'
        description='Report & Visualizations of Expenditures, Revenues, and Debt for the City of Los Angeles'
        image='https://controller.lacity.gov/images/pafrthumbnail3.png'
      />
      <Layout>
        <div className='flex flex-col pb-2 dark:text-white'>
          <div
            className=''
            style={{
              //url
              background: 'url(/images/acfr-coverphoto.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
            }}
          >
            <div className='container mx-0 px-2 pb-3 pt-5 dark:text-gray-100  sm:px-4 lg:mx-auto lg:max-w-7xl'>
              <div className='xl:mt-64'>
                <span className='xl:py-1'></span>
              </div>
              <div>
                <h1 className='w-content mt-64 mb-64 ml-2 px-2 text-2xl text-white sm:px-4 sm:py-4 sm:text-3xl md:text-4xl lg:mb-96 lg:mt-96 xl:mb-32'>
                  <span className='rounded-lg bg-black bg-opacity-60 px-2 py-1'>
                    Popular Annual Financial Report FY22
                  </span>
                </h1>
                <p className='rounded-lg bg-black bg-opacity-60 px-2 py-1 text-base italic sm:text-lg'>
                  A summary of the City of Los Angeles Annual Comprehensive
                  Financial Report for Fiscal Year ended June 30, 2022.
                </p>
              </div>
            </div>
          </div>
          <div className='container mx-0 px-2 pb-3 pt-5 dark:text-gray-100  sm:px-4 lg:mx-auto lg:max-w-7xl'>
            {/* 
							<br /> for spacing is a presentational hack that screen readers announce, so I would remove them, and instead increase the margin-bottom of the element to create more space.

              If a <br /> *must* be used instead of margin, then I would an "aria-hidden=true" so screen readers skip it.
						*/}
            {/* 
              The following was changed to paragraph elements as the MDN says to do that instead of using <br />
              https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/br#accessibility

              I would style the paragraph element globally so as to keep the code as DRY as possible. If a particular paragraph needed different styles, then I could do that inline as I did for this exercise
            */}
            <p className='mt-2 lg:max-w-5xl'>
              LA City Controller Kenneth Mejia releases the Annual Comprehensive
              Financial Report (ACFR) each January to provide a complete picture
              of the City’s finances. This website contains the Popular Annual
              Financial Report (PAFR), a summary of the ACFR that presents the
              information in a more accessible format, along with charts and
              graphs measuring how the City serves residents.
            </p>
            <p className='text-green-800 underline dark:text-[#41ffca] mt-2'>
              <Link
                href='/acfr22.pdf'
                target='_blank'
                rel='noreferrer noopener'
                className='text-green-800 underline dark:text-mejito'
              >
                Click here for the full FY2022 Annual Comprehensive Financial
                Report
              </Link>
            </p>

            <div className='lg:max-w-5xl'>
              <h2>A Letter from City Controller Kenneth Mejia</h2>
              <p className='mt-2 lg:max-w-5xl'>
                Community Members of the City of Los Angeles
                {/* decorative images (images that do not add information to the page) do not need descriptive text, but they still do need an empty alt
                 */}
                <img
                  className='float-right ml-2 mb-2 w-32 sm:ml-4 sm:mb-4 sm:w-64'
                  src='/images/cropped-kenneth.jpg'
                  alt=''
                />
                As the new Controller for the City of Los Angeles, our Office
                has the Charter responsibility to prepare and publish the City's
                Annual Comprehensive Financial Report (ACFR) of the City for the
                fiscal year ended June 30, 2022.
              </p>
              <p className='mt-2 lg:max-w-5xl'>
                We live in tumultuous times. The residents and businesses of Los
                Angeles have endured a once-in-a-century pandemic that upended
                lives and livelihoods throughout the City, falling hardest on
                the most vulnerable. Rising rents and housing prices have
                increased housing insecurity for tens of thousands of tenants
                and fueled a homelessness emergency. The impacts of the
                pandemic, inflation and international conflicts continue to
                disrupt supply chains around the world.
              </p>
              <p className='mt-2 lg:max-w-5xl'>
                Amid deepening economic and political divides, Los Angeles is at
                the epicenter of these and even larger challenges, including the
                "planetary red alert" of climate change. Angelenos in the last
                election voted for change. It is our responsibility to respond
                with transparency and accountability.
              </p>
              <p className='mt-2 lg:max-w-5xl'>
                The ACFR provides a report on revenues and expenses for all the
                City's funds, including the Harbor, Airports and Department of
                Water and Power and a snapshot of the fiscal condition of the
                City as it ended the fiscal year on June 30 of 2022.
              </p>
              <ul className='list-disc pl-4'>
                <li>
                  Total City revenues, including Governmental and Business-Type
                  activities, were approximately $20.0 billion, an 8.7 percent
                  increase over FY 2020-21.
                </li>
                <li>
                  {' '}
                  Total City expenses including Governmental and Business-Type
                  activities, were approximately $16.6 billion, a decrease of
                  4.5 percent from FY 2020-21.
                </li>
                <li>
                  The aggregate fund balances of the City's governmental funds
                  were $7.3 billion, a net increase of $857.4 million from June
                  30, 2021.
                </li>
                <li>
                  The Reserve Fund cash balance began FY 2022-23 at $601.7
                  million or 8.1 percent of General Fund Budget, down from an
                  all-time high of $647.0 million at the beginning of Fiscal
                  Year 2021-22.
                </li>
                <li>
                  The City's bonded debt and long-term notes payable as of June
                  30, 2022, totaled $37.3 billion, an increase of $3.1 billion
                  from the prior year's balance of $34.2 billion.
                </li>
                <li>
                  The largest General Fund departmental expenditures (including
                  encumbrances) went to Police ($1.8 billion); Fire ($780.2
                  million); and Sanitation ($330.6 million).
                </li>
              </ul>

              <p className='mt-2 lg:max-w-5xl'>
                While the City is currently in a stable fiscal position,
                significant challenges lie ahead. The almost $2.0 billion in
                one-time revenue from the federal government available during
                the last two years has largely been spent. Retirement Plans'
                adverse investment returns during Fiscal Year 2021-22 will
                increase future pension costs, which now consume more than 15%
                of the General Fund budget. Increased labor costs put a further
                strain on resources to maintain and improve services to our
                residents. There is also universal recognition of the need to
                spend more to house the more than 42,000 unhoused residents of
                our community. Finally, Los Angeles has underinvested for
                decades in maintaining its capital and human infrastructure -
                which will come under intense test from the impacts of climate
                change.
              </p>
              <p className='mt-2 lg:max-w-5xl'>
                All this impels us to "link arms" (as Mayor Karen Bass has
                advocated) to undertake the difficult, long-term changes that
                will not only ensure financial stability, but address the urgent
                need to make Los Angeles a more equitable and sustainable city.
                We pledge that the Office of the Controller will be a
                collaborative partner in meeting those shared challenges.
              </p>
              <p className='mt-2 lg:max-w-5xl'>
                I would like to acknowledge the professional and dedicated staff
                of the Financial Analysis and Reporting Division of the
                Controller's Office for the preparation of this report. I would
                also like to express my appreciation to other staff of the
                Office for their assistance and contributions, as well as other
                professional contributors citywide.
              </p>
              <p className='mt-2 lg:max-w-5xl'>
                Respectfully submitted,
                <br />
                {/* I'm assuming here the image is purely presentation as Kenneth's text signature is below it, as such I gave it an aria-hidden=true so the screen readers skip it, but included a span for only screen readers to know of Kenneth's signature. Having an alt/aria-label mentioning Kenneth's signature plus the text signature is redundant, but if it's needed, this can be adjusted as such.
                 */}
                <img
                  src='/images/sig-light.png'
                  alt=''
                  className='w-64 dark:hidden'
                  aria-hidden='true'
                />
                <img
                  src='/images/sig-dark.png'
                  alt=''
                  className='hidden w-64 dark:block'aria-hidden='true'>
                <span className='sr-only'>Signed by: </span>
                Kenneth Mejia
                <br />
                Los Angeles City Controller
              </p>
            </div>
            <h2>About Popular Annual Financial Reporting</h2>
            <p className='mt-2  lg:max-w-5xl'>
              <img
                className='float-left mr-1 mb-1 w-32 dark:hidden md:w-48 lg:w-64'
                src='/images/award21pafr.png'
                alt=''
              ></img>
              <img
                className='float-left mr-1 mb-1 hidden w-32 dark:block md:w-48 lg:w-64'
                src='/images/award21pafr-dark.png'
                alt=''
              />
              The Government Finance Officers Association of the United States
              and Canada (GFOA) has given an Award for Outstanding Achievement
              in Popular Annual Financial Reporting to the City of Los Angeles
              for its Popular Annual Financial Report for the fiscal year ended
              June 30, 2021. The Award for Outstanding Achievement in Popular
              Annual Financial Reporting is a prestigious national award
              recognizing conformance with the highest standards for preparation
              of state and local government popular reports.
            </p>
            <p className='mt-2 lg:max-w-5xl'>
              To receive the award, a government unit must publish a Popular
              Annual Financial Report, whose contents conform to program
              standards of creativity, presentation, understandability, and
              reader appeal. The award is valid for a period of one year only.
              We believe our current report continues to conform to the Popular
              Annual Financial Reporting requirements, and we are submitting it
              to GFOA to determine its eligibility for another Award.
            </p>
            <h2 className='mt-3'>Local Economy</h2>
            <p className='mt-2 lg:max-w-5xl'>
              The City and its surrounding metropolitan region feature
              incredible diversity in both population and the economy. Tourism
              and hospitality, professional and business services, international
              trade, entertainment production, and wholesale trade and logistics
              all contribute significantly to local employment. The Port of Los
              Angeles handles the largest volume of containerized cargo of all
              U.S. ports and ranks as number one in cargo value for U.S.
              waterborne foreign traffic. According to preliminary ACI
              statistics, in the calendar year 2021, Los Angeles International
              Airport (LAX) was the fifth busiest airport in the world in terms
              of total passengers and 8th busiest airport in the world in terms
              of total cargo metric tons.
            </p>
            <p className='mt-2 lg:max-w-5xl'>
              The passage of the federal American Rescue Plan Act (ARPA) in
              March 2021 significantly changed City’s fiscal outlook after the
              pandemic downturn. ARPA, which provided $1.3 billion in direct
              financial assistance to the City over the last two fiscal years
              helped fill the revenue gap and eliminated the need to dip into
              the reserves to balance the books.
            </p>
            <p className='mt-2 lg:max-w-5xl'>
              At the beginning of fiscal year 2022, as COVID-19 vaccine became
              widely available and the economy reopened, the unemployment in the
              City of Los Angeles began its steady decline from 7.2 percent in
              October 2021 to 4.6 percent as of October 2022. With the improving
              economy throughout fiscal 2022, most economic sensitive revenue
              rebounded. The improvement in revenue along with the federal
              assistance allowed the City to close fiscal year 2022 in a strong
              financial position. While most revenue sources have remained
              stable during the earlier months of fiscal year 2023, the economic
              outlook for the remainder of the fiscal year remains uncertain.
              According to the University of California (UCLA) Anderson
              Forecast, the employment picture in California has evolved
              slightly in recent months as the three sectors of health care and
              social services, leisure and hospitality, and education have shown
              the largest gains in jobs. And despite the statewide gains in
              leisure and hospitality employment, the landscape for that sector
              remains difficult in the City of Los Angeles. Without increased
              employment gains in the hospitality and leisure sector, full
              economic recovery is expected to remain on a shallow trend. In
              addition, whether the economy slips into a recession or not
              depends largely on whether inflation continues to stay elevated,
              and any additional actions the Federal Reserve takes to bring down
              inflation.
            </p>
            <p className='mt-2 lg:max-w-5xl'>
              While the City is currently in a strong fiscal position,
              significant challenges lie ahead. The almost $2 billion in
              one-time revenue from the federal government available during the
              last two years is no longer available for future budgets. The City
              faces difficult decisions on how to continue the programming those
              funds made possible while simultaneously facing potential
              increased cost and lower receipts arising from the impact of
              rising interest rates.
            </p>
            <p className='mt-2 lg:max-w-5xl'>
              Higher mortgage interest rates have led to declining real estate
              sales volume and decreasing prices, which would impact documentary
              tax receipt, a key revenue source for the City. In its Second
              Financial Status Report issued on December 1, 2022, the Chief
              Administrative Officer reported that declining sales have already
              resulted in $23 million in documentary transfer tax receipts
              shortfall during the first four months of fiscal year 2023. Voters
              in the last election passed Measure ULA, which increases the tax
              to provide revenue. More worrisome is that sales volume is
              expected to continue to slide. According to the California
              Association of Realtors’ October 2022 forecast, sales volume is
              expected to decline by 7.2 percent and prices are expected to
              decrease by 8.8 percent in 2023. This would likely result in
              increasing monthly shortfalls and lower year-end documentary
              receipts. In addition, the increasing probability of a recession,
              the unresolved war abroad, global supply chain issues, and energy
              costs contribute to downward economic pressures which could
              negatively affect other economically sensitive revenue sources.
            </p>
            {/* Add Visual - Demographic and Economic Data */}
            {/* Add Visual - Principal Employers */}
            {/* even though I didn't go into these next two components, I know the <th> is missing scope attributes for screen readers */}
            <Demographics />
            <br aria-hidden='true' />
            <Employers />
          </div>
          <div className='container mx-0 px-2 pb-3 pt-5 dark:text-gray-100  sm:px-4 lg:mx-auto lg:max-w-7xl'>
            <h2 className='mt-3'>City Organization</h2>
            <p className='mt-2 lg:max-w-5xl'>
              The City operates under a Mayor-Council form of government. The
              Mayor supervises the administrative processes of the City and
              works with the City Council in matters relating to legislation,
              budget and finance. The 15-member City Council enacts ordinances,
              levies taxes, authorizes contracts and public improvements, adopts
              zoning and other land use contracts, and provides necessary
              resources for the budgetary departments and offices of the City.
              The City Controller and City Attorney are independently elected
              citywide.
            </p>
            <p className='mt-2 lg:max-w-5xl'>
              The City has 46 departments, bureaus, commissions and offices, 39
              of which have their operating funds annually budgeted by the City
              Council. The Department of Water and Power, Harbor Department, and
              the Department of Airports are publicly-owned entities under the
              control of boards appointed by the Mayor and confirmed by the City
              Council. Several other departments are fiscally independent or
              under the control of independent boards.
            </p>
            <p className='mt-2 lg:max-w-5xl'>
              Public services provided by the City include police, fire and
              paramedics, residential refuse collection and disposal, wastewater
              collection and treatment, street maintenance and traffic
              management, enforcement of building safety laws, libraries,
              recreation and parks, community development, housing and services
              for seniors, planning; two airports, harbor, power and water
              services, and the convention center. Performance data on some of
              these services is collected below in the “City Activities”
              section.
            </p>
            <div className='mt-2 rounded-lg border-4 border-mejito bg-mejito bg-opacity-30 px-2 py-2 dark:bg-opacity-20 lg:max-w-5xl'>
              {/* Pick of sherlock killa of the left side insert here later */}
              <img
                src='/sherlockcorgi.png'
                className='float-left mb-1 mr-1 w-32'
                alt=''
              />
              <p className='mt-2 lg:max-w-5xl'>
                <h2 className='mt-3'>Key Terms</h2>
                <span className='font-bold'>Governmental Activities:</span>{' '}
                Functions of the City that are primarily supported by taxes and
                intergovernmental revenues. These include general government,
                police, fire and paramedics, public works, health and sanitation
                (other than sewer services), transportation, cultural and
                recreational services, and community development.
              </p>
              <p className='mt-2 lg:max-w-5xl'>
                <span className='font-bold'>Business-Type Activities:</span>{' '}
                Functions and services provided to the general public, that are
                intended to recover all or a portion of their costs through user
                fees and charges. These include airports, harbor, power, water,
                sewer and convention center services.
              </p>
              <p className='mt-2 lg:max-w-5xl'>
                <span className='font-bold'>Net Position:</span> The difference
                between the value of what the City owns minus the value of what
                the City owes. One can look at net position as the City’s "net
                worth."
              </p>
              <p className='mt-2 lg:max-w-5xl'>
                <span className='font-bold'>General Fund:</span> The main
                operating fund of the City, which is used to finance general
                government operations.
              </p>
              <p className='mt-2 lg:max-w-5xl'>
                <span className='font-bold'>Capital Assets:</span> These include
                land, buildings, facilities, equipment and infrastructure that
                the City owns. The City uses these capital assets to provide
                services to its citizens; consequently, these assets are not
                available for future spending.
              </p>
            </div>
          </div>
          <div className='container mx-0 px-2 pb-3 pt-5 dark:text-gray-100  sm:px-4 lg:mx-auto lg:max-w-7xl'>
            {/*
              - a page can only contain one H1
              - before I changed this to an H2, it went from H1 -> H3, which isn't encouraged as it creates unnecessary accessibility issues: https://www.boia.org/blog/is-going-from-h1-to-h3-okay-for-wcag-conformance#:~:text=If%20you%20jump%20from%20an,find%20the%20information%20they%20need.
            */}
            <h2 className='mt-3'>Management's Discussion and Analysis</h2>
            <p className='mt-2 lg:max-w-5xl'>
              For the fiscal year that ended on June 30, 2022, total City
              revenues were $20.0 billion, an increase of 8.7% over the prior
              year. Expenses were $16.6 billion, 4.5% less than the prior year.
            </p>
          </div>

          <div className='container mx-0 px-4 pb-3 pt-3  dark:text-gray-100 lg:mx-auto lg:max-w-7xl'>
            <h3 className='mt-3'>FY 22 Total Revenues: $20.0 billion</h3>
            {/* Add Visual - City Revenues */}
            <CityRevenue />
            <h3 className='mt-3'>FY 22 Total Expenses: $16.6 billion</h3>
            <Expenditures />
          </div>

          <div className='container mx-0 px-2 pb-3 pt-5 dark:text-gray-100  sm:px-4 lg:mx-auto lg:max-w-7xl'>
            <p className='mt-4 lg:max-w-5xl'>
              Total revenues of governmental activities were $10.2 billion,
              while total expenses were $7.8 billion. Of the $7.8 billion total
              expenses, 40.3% was funded by taxes and other general revenues,
              and the remaining 59.7% was funded by program revenues and
              transfers from business-type funds. Program revenues are resources
              obtained from parties outside of the City and charges for services
              between the governmental and business-type activities.
            </p>
            <p className='mt-2 lg:max-w-5xl'>
              Total expenses decreased by $1.7 billion or 18.0% compared to FY
              21. Expenses decreased in the following functional areas: general
              government by $209.6 million, protections of persons and property
              by $1.4 billion, public works by $73.9 million, health and
              sanitation by $125.3 million, transportation by $13.5 million, and
              interest on long-term debt by $1.6 million; offset by increases of
              cultural and recreational services of $9.3 million and community
              development of $77.6 million.
            </p>

            <h2>Business-Type Activities</h2>
            <p className='mt-4 lg:max-w-5xl'>
              The $9.0 billion combined operating revenues of the City’s six
              business-type activities were $1.6 billion more than the $7.4
              billion combined operating expenses.
            </p>

            <h2> Business-Type Activities: Change in Net Position</h2>
            <p className='mt-4 lg:max-w-5xl'>
              Enterprise funds are used to report the functions presented as
              business-type activities in the government-wide financial
              statements, they are generally used to account for services for
              which the City charges customers – either outside customers or
              other departments/funds of the City. All of the City’s enterprise
              funds, except the convention center, are considered major funds.
              The operating results of the City’s six enterprise funds are
              reflected in the change in net position statement below.
            </p>
            <Changeinnetpos />
            {/* any interactive chart would have a screen-reader only instructions, in cases there's more than one, I made the chart-instructions a class and not an id */}
            <p className='sr-only chart-instructions'>
              Use the slider to select a year. The chart and table will update dynamically.
            </p>
          </div>
          <div className='container mx-0 px-4 pb-3 pt-3  dark:text-gray-100 lg:mx-auto lg:max-w-7xl'>
            <h3 className='mt-3'>Bonded Debt and Long-Term Notes Payable</h3>
            <h4>$37.3 billion, 9.0% increase from FY 21</h4>
            <BondsOverTime />
            <h3 className='mt-3'>
              Ratings of the City's Debts by Rating Agencies
            </h3>
            <Credit />
            <p className='mt-4 lg:max-w-5xl'>
              The City has established guidelines for the structure and
              management of the City’s debt, which include target and ceiling
              levels for certain debt ratios to be used for financial planning
              purposes and restrictions on the types of items that can be
              financed, limiting financing only to those items with a useful
              life of six years or more. In accordance with this policy, the
              ratio of annual debt payments cannot exceed 15% of General Fund
              revenues for voter-approved and non-voter approved debt overall,
              and cannot exceed 6% of General Fund revenues for non-voter
              approved debt alone. The 6% ceiling for non-voter approved debt
              may be exceeded only if there is a guaranteed new revenue stream
              for the debt payments and the additional debt will not cause the
              ratio to exceed 7.5%, or there is no guaranteed revenue stream but
              the 6% ceiling shall not be exceeded for more than one year.
            </p>
            <p className='mt-2 lg:max-w-5xl'>
              For 2022, the ratios were{' '}
              <span className='font-bold'>4.7% for overall debt</span> and{' '}
              <span className='font-bold'>
                3.0% for non-voter approved debt.
              </span>{' '}
            </p>
            <p className='mt-2 lg:max-w-5xl'>
              Of the{' '}
              <span className='font-bold'>
                $37.3 billion long-term bonds and notes payable, $751.7 million
                were General Obligation bonds.
              </span>
            </p>
            <p className='mt-2 lg:max-w-5xl'>
              As of June 30, 2022, the City is in compliance with its Debt
              Policies.
            </p>
          </div>
          <div className='container mx-0 px-4 pb-3 pt-3  dark:text-gray-100 lg:mx-auto lg:max-w-7xl'>
            <h2>Net Position</h2>
            <p className='mt-2 lg:max-w-5xl'>
              The <span className='font-bold'>net position</span> is the
              financial position of the City – assets and deferred outflows of
              resources <span className='font-bold'>minus</span> liabilities and
              deferred inflows of resources.
            </p>
            <div className='mt-2 flex flex-col gap-y-2 md:flex-row md:gap-x-3'>
              <div className="rounded-lg bg-gray-100 px-3 py-3 dark:bg-gray-800 md:w-1/2">
                <p>Total City Assets: $87.4 billion.</p>
                <p>Deferred Outflows of Resources: $3.8 billion.</p>
                <p className="font-bold">Total: $91.2 Billion.</p>
  
                <p className="font-bold mt-4">Assets represent what the City owns:</p>
                <ul className="list-disc px-4">
                  <li>Cash and pooled investments</li>
                  <li>Receivables</li>
                  <li>Capital assets (land, buildings and infrastructure)</li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-100 px-3 py-3 dark:bg-gray-800 md:w-1/2">
                <p>Total City Liabilities: $51.3 billion.</p>
                <p>Deferred Inflows of Resources: $11.4 billion.</p>
                <p className="font-bold">Total: $62.7 billion.</p>
  
                <p className="font-bold mt-4">Liabilities represent what the City owes:</p>
                <ul className="list-disc px-4">
                  <li>Bonds and notes</li>
                  <li>Claims and judgments</li>
                  <li>Unearned revenue</li>
                  <li>Accounts payable and accrued expenses</li>
                </ul>
              </div>
            </div>

            <h3>
              Net Position: $28.5 billion, $3.4 billion (13.6%) increase from FY 21
            </h3>
            <p>
              The net position of $28.5 billion consisted of:
            </p>
            <p className='mt-2 lg:max-w-5xl'>
              <span className='font-bold'>
                Net investment in capital assets:
              </span>{' '}
              $22.3 billion, including land, building, infrastructure and
              equipment, less accumulated depreciation and outstanding debt,
              deferred outflows and deferred inflows of resources related to
              acquisition, construction or improvements ($6.5 billion in
              governmental activities and $15.8 billion in business-type
              activities). This is an increase of $306.6 million over FY 21.
            </p>
            <p className='mt-2 lg:max-w-5xl'>
              <span className='font-bold'>Restricted net position:</span> $6.1
              billion, which represents external restrictions imposed by
              creditors, grantors, contributors, laws of other governments,
              constitutional provisions or enabling legislation ($4.3 billion in
              governmental activities and $1.8 billion in business-type
              activities). This is an increase of $158.2 million over FY 21.
            </p>
            <p className='mt-2 lg:max-w-5xl'>
              <span className='font-bold'>Unrestricted net position:</span>{' '}
              $114.4 million is the net amount of the governmental deficit of
              $5.2 billion and $5.4 billion in unrestricted net position in its
              business activities. Compared to FY21, the overall unrestricted
              position increased by $2.9 billion, primarily due to a combination
              of reduction in governmental deficit by $2.3 billion and an
              increased in business-type of 653.2 million.
            </p>
            <p className='mt-2 lg:max-w-5xl'>
              The City’s net position is illustrated in the table below:
              <ChangeinnetposGen />
            </p>
            {/*Net Pos Generally */}
            <h2 className='mt-3'>General Fund</h2>
            <p className='mt-2 lg:max-w-5xl'>
              The General Fund is the general operating fund of the City and
              includes transactions of the Reserve Fund and other accounts that
              have General Fund type activity for generally accepted accounting
              principles reporting purposes.
            </p>
            <p className='mt-2 lg:max-w-5xl'>
              On June 30, 2022, the General Fund reported a total fund balance
              of $1.5 billion, composed of $66.5 million nonspendable; $85.1
              million committed; $724.3 million assigned for general government
              purposes; and $621.8 million unassigned.
            </p>
            <p className='mt-2 lg:max-w-5xl font-bold'>
                In FY 22, General Fund revenues exceeded expenses by $408.3
                million.
            </p>
            <h2 className='mt-3'>General Fund Revenues</h2>
            <h3 className='font-bold'>
              FY 22 Total General Fund Revenues: $6.2 billion, $498.5 million
              8.8% increase from FY 21
            </h3>
            {/*Revenues  vis */}
            <GeneralRevenue />
            {/* revenues text */}
            <ul className='list-disc'>
              <li>
                <span className='font-bold'>Tax Revenues</span>, increased by
                $571.0 million or 11.9% from FY 21 due primarily to property tax
                growth. Taxes accounted for $5.4 billion (86.8%) of General Fund
                revenue.
              </li>
              <li>
                <span className='font-bold'>Property Taxes</span>, which
                represent 40.4% of General Fund revenue, increased by $90.5
                million (3.8%), primarily due to growth in secured property tax
                and VLF Replacement of $84.5 million.
              </li>
              <li>
                <span className='font-bold'>Sales tax</span> increased by $132.0
                million (23.5%) as a result of improvement in local economic
                activity, while <span className='font-bold'>business tax</span>{' '}
                grew by $70.4 million (10.3%) due to growth in non-cannabis
                offset by a decrease in legal recreational cannabis.
              </li>
              <li>
                <span className='font-bold'>Utility users’ tax</span> revenues
                posted an increase of $21.5 million (3.5%), as growth in gas
                users tax and electrical users taxes, offset the modest decline
                in communications users tax. Gas user taxes contributed $17.1
                million of the increase in this category primarily due to the
                historic spike in natural gas price during much of the fiscal
                year.
              </li>
              <li>
                <span className='font-bold'>Other tax revenues</span> were up by
                $256.6 million or 49.2%, primarily due to increases of 128.7
                million in{' '}
                <span className='font-bold'>Transient Occupancy Tax</span>,
                $39.7million in{' '}
                <span className='font-bold'>Parking Occupancy Tax</span>{' '}
                receipts and $62.3 million in{' '}
                <span className='font-bold'>Documentary Transfer Tax</span> due
                to home price appreciation during FY22.
              </li>
              <li>
                <span className='font-bold'>Licenses and permits</span> revenues
                were up by $2.1 million (7.2%), due to recovery of filming
                permit fees from pandemic low.
              </li>
              <li>
                <span className='font-bold'>Charges for services</span> provided
                to Enterprise Fund totaled $17.6 million or 4.9% lower than
                prior fiscal year.
              </li>
              <li>
                <span className='font-bold'>Net investment earnings</span> and
                <span className='font-bold'>other revenues</span> decreased by
                $88.2 million, due to decreases in investment earnings and
                change in the fair market value of investments.
              </li>
            </ul>

            <h2 className='mt-3'>General Fund Expenses</h2>
            <h3 className='font-bold'>
              FY 22 General Fund Expenses: $5.8 billion, $465.6 million (8.8%)
              increase over FY 21
            </h3>
            {/*Expenses  vis */}
            <GeneralExpenditures />
            <ul className='list-disc'>
              <li>
                <span className='font-bold'>
                  Salaries and Benefits increased by $319.1 million (9.3%)
                </span>
                , due to payment of excess sick and overtime payouts, and
                one-time bonuses to certain labor organizations for a portion of
                deferred compensation adjustments and increased pension
                contribution.
              </li>
              <li>
                <span className='font-bold'>
                  Capital outlays increased by $24.8 million (85.1%),
                </span>{' '}
                attributed to increase in right-to-use lease contracts and
                progression of capital projects.
              </li>
              <li>
                <span className='font-bold'>
                  Contractual services, operating equipment, and supplies went
                  up by $53.6 million (4.4%),
                </span>{' '}
                due to increased fuel and utility costs as well increased costs
                from inflationary pressure on other materials and commodity
                prices.
              </li>
            </ul>

            <h2 className='mt-3'>City Activities</h2>
            <p className='mt-2 lg:max-w-5xl'>
              The charts represents performance metrics reported across
              departments. Switch departments using the picker below.
            </p>
          </div>

          <div className='container mx-0 pb-3  dark:text-gray-100 sm:px-4 lg:mx-auto lg:max-w-7xl'>
            <CityActivities />
          </div>
        </div>
      </Layout>
    </>
  );
}
