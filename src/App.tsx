import Home from './pages/Home'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-blue-50 px-4 py-10 sm:px-6">
      {/* Main content area grows to push footer down */}
      <main className="flex-grow w-full mt-20 max-w-xl mx-auto">
        <Home />
      </main>

      <footer className="text-center font-poppins text-sm text-gray-500 mt-10 pb-2">
        Made with ❤️ by{' '}
        <a
          href="https://github.com/iammadheshwaran"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:text-blue-600"
        >
          Marsh
        </a>
      </footer>
    </div>
  )
}

export default App
