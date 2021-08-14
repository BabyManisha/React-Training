import React, {lazy, Suspense, useState} from 'react'
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import Nesting from './1nestingNparam/Nesting'

const DynamicLoad = lazy(() => import('./2dynamicLoading/DynamicLoad'));

export default function Advanced() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let {path, url} = useRouteMatch();

    const [comp, setComp] = useState(false);

    return (
        <div>
            <h1>Advanced</h1>
            <Router>
                <Link to={`${url}/url1`} className="navLink">URL1</Link>
                <Link to={`${url}/url2`} className="navLink">URL2</Link>
                <Link to={`${url}/url3?sm=something`} className="navLink">QueryParam</Link>
            </Router>
            <Switch>
                <Route path={`${path}/:id`} children={<Nesting/>}></Route>
            </Switch>

            <section>
                <h2>Dynamic / Lazy Loading</h2>
                <button onClick={() => setComp(true) }>Load the COmponent</button>
                { comp &&  <Suspense fallback={"<b>Component is Loading......</b>"}><DynamicLoad/></Suspense> }
            </section>
        </div>
    )
}

