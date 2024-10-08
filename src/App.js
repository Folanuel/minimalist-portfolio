import React from 'react';
import { FaChartLine, FaUsers, FaBalanceScale, FaSmile, FaChalkboardTeacher } from 'react-icons/fa';
import Dashboard from './assets/HR-Dashboard.png'
import DPS from './assets/Data-professional-survey.png'
import Excel from './assets/Excel-dashboard.png'
import Student from './assets/student-data.png'

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-2xl rounded-lg">
        <div className="text-center animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl font-bold mt-4 text-indigo-700">Haleemah Onikoyi</h1>
          <p className="text-gray-600 mt-2 text-base sm:text-lg">People Analyst</p>
        </div>

        <section className="mt-10 animate-fadeIn">
          <h2 className="text-2xl font-semibold text-indigo-600 text-center">About Me</h2>
          <p className="mt-4 text-gray-700 text-sm sm:text-base text-center">
            I'm Haleemah Onikoyi, a driven and analytical HR professional with a strong foundation in HR principles and practices. I excel at transforming data into actionable recommendations that enhance employee experiences and organizational performance.
          </p>
        </section>

        <section className="mt-10 animate-fadeIn">
          <h2 className="text-2xl font-semibold text-indigo-600 text-center">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-blue-100 p-4 rounded-lg flex items-center shadow-md transform transition-transform hover:scale-105">
              <FaChartLine className="text-blue-500 text-3xl mr-4" />
              <p className="text-gray-700 font-semibold">HR Data Analysis & Visualization</p>
            </div>
            <div className="bg-red-100 p-4 rounded-lg flex items-center shadow-md transform transition-transform hover:scale-105">
              <FaUsers className="text-red-500 text-3xl mr-4" />
              <p className="text-gray-700 font-semibold">Workforce Planning & Talent Management</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg flex items-center shadow-md transform transition-transform hover:scale-105">
              <FaBalanceScale className="text-green-500 text-3xl mr-4" />
              <p className="text-gray-700 font-semibold">Diversity, Equity & Inclusion (DEI) Analytics</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg flex items-center shadow-md transform transition-transform hover:scale-105">
              <FaSmile className="text-yellow-500 text-3xl mr-4" />
              <p className="text-gray-700 font-semibold">Employee Engagement & Sentiment Analysis</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg flex items-center shadow-md transform transition-transform hover:scale-105">
              <FaChalkboardTeacher className="text-purple-500 text-3xl mr-4" />
              <p className="text-gray-700 font-semibold">Training & Development Effectiveness</p>
            </div>
          </div>
        </section>

        <section className="mt-10 animate-fadeIn">
          <h2 className="text-2xl font-semibold text-indigo-600 text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="bg-indigo-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <img src={Dashboard} alt="HR Analytics Dashboard" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-indigo-700 font-semibold">HR Analytics Dashboard</h3>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">
                Developed a comprehensive HR analytics dashboard using Power BI to monitor HR metrics such as turnover rates, hiring trends, and employee engagement scores.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <img src={DPS} alt="DEI Analytics Report" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-indigo-700 font-semibold">Analytics Report</h3>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">
                Analyzed diversity and inclusion data and produced reports to help executives make data-driven decisions on improving workplace equity and diversity efforts.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <img src={Student} alt="Student Assessment Tool" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-indigo-700 font-semibold">Student Assessment Tool</h3>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">
                Created a tool that enables manually loading each student's scores by subject for quiz, homework, attendance, and exam using the Python input() function. 
                Automatically computes the Average Score, GPA (0 to 5.0), Grade, and Status (Pass, Fail, Retake) and stores in a container for each student.
              </p>
            </div>         

            <div className="bg-indigo-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <img src={Excel} alt="Employee Engagement Analysis" className="w-full h-40 object-cover rounded-lg mb-4" />              
              <h3 className="text-indigo-700 font-semibold">Employee Engagement Analysis</h3>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">
                Conducted sentiment analysis on employee feedback surveys and presented findings in visual reports to improve company culture and engagement strategies.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 animate-fadeIn">
          <div className="max-w-lg mx-auto bg-indigo-100 p-6 rounded-full shadow-xl transform transition-transform hover:scale-110 hover:animate-bounce">
            <h2 className="text-2xl font-semibold text-indigo-700 text-center">Let's Collaborate!</h2>
            <p className="mt-4 text-gray-700 text-center text-sm sm:text-base">
              I'm always excited to connect with professionals and organizations looking to leverage data for better HR insights. Whether you have a project in mind or just want to discuss innovative HR solutions, feel free to reach out!
            </p>
            <p className="mt-4 text-gray-700 text-center text-sm sm:text-base">
              Phone: <a href="tel:+2348181778424" className="text-indigo-500">08181778424</a>
            </p>
            <p className="text-gray-700 text-center text-sm sm:text-base">
              LinkedIn: <a href="http://linkedin.com/in/haleemah-onikoyi123" className="text-indigo-500">http://linkedin.com/in/haleemah-onikoyi123</a>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
