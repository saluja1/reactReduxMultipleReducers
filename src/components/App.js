import React from 'react';
import { connect } from 'react-redux';

const applyFilter = searchTerm => article => {
  return article.title.toLowerCase().includes(searchTerm.toLowerCase());
  
 }

const App = ({ articles, searchTerm, onSearch, onAdd }) =>
  <div>
    <AddArticles onAdd={onAdd} />
    <Search value={searchTerm} onSearch={onSearch}>
      <p>Search</p>
    </Search>
    <Articles articles={articles.filter(applyFilter(searchTerm))} />
  </div>

const Search = ({ value, onSearch, children }) =>
  <div>
    {children} <input
      value={value}
      onChange={event => onSearch(event.target.value)}
      type="text"
    />
  </div>


const AddArticles = ({onAdd}) =>
  <ul>
    <input
        id="addArticle"
      type="text"
    />
    <input type="button" onClick={event => onAdd()} value="Add"/>
  </ul>

const Articles = ({ articles }) =>{
  return <ul>
    {articles.map(article =>
      <li key={article.id}>
        <Article article={article} />
      </li>
    )}
  </ul>
}

const Article = ({ article }) => {
    return(
        <a href={article.url}>{article.title}</a>    
    )
}


const mapStateToProps = state => ({
    articles: state.articlesState.articles,
    searchTerm: state.searchState.searchTerm,
    addTerm: state.articlesState.addTerm
});

const mapDispatchToProps = dispatch => ({
  onSearch: searchTerm => dispatch({ type: 'SEARCH_SET', searchTerm }),
  onAdd: addTerm => dispatch({ type: 'ADD_SET', addTerm })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
