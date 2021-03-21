import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Header from './components/Header'

import Dashboard from './pages/Dashboard'
import ProformaInvoice from './pages/ProformaInvoice'
import DocumentSearch from './pages/DocumentSearch'
import ProductSearch from './pages/ProductSearch'

function App() {
	// Sidebar state close/open
	const [sidebarOpen, setSidebarOpen] = useState(false)

	return (
		<div className="flex h-screen bg-gray-200">
			<Router>
				<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
				<div className="flex-1 flex flex-col overflow-hidden">
					<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
					<main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
						<Switch>
							<Route exact path="/" component={Dashboard} />
							<Route path="/nueva-factura" render={() => <ProformaInvoice key={Date.now().toString()} formTitle='Factura' />} />
							<Route path="/nueva-proforma" render={() => <ProformaInvoice key={Date.now().toString()} formTitle='Proforma' />} />
							<Route path="/buscar-documentos" component={DocumentSearch} />
							<Route path="/buscar-productos" component={ProductSearch} />
						</Switch>
					</main>
				</div>
			</Router>	
		</div>
	)
}

export default App
