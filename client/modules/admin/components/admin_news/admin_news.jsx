import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Toggle from 'material-ui/Toggle';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import T from '/lib/i18n';
import {
  Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,
} from 'material-ui/Table';

class AdminNews extends React.Component {
  render() {
    const { articles, goTo } = this.props;
    return (
      <div className="admin-news">
        <Paper zDepth={1}>
          <div className="title-panel">
            <span className="title"><T>news</T></span>
            <div className="actions">
              <IconButton onTouchTap={() => goTo('admin.news.add')}>
                <AddCircleOutline />
              </IconButton>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn><T>title</T></TableHeaderColumn>
                <TableHeaderColumn><T>public_status</T></TableHeaderColumn>
                <TableHeaderColumn><T>date_create</T></TableHeaderColumn>
                <TableHeaderColumn><T>public_date</T></TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {articles && articles.map(article => (
                <TableRow key={article._id}>
                  <TableRowColumn>{article.title}</TableRowColumn>
                  <TableRowColumn>
                    <Toggle value={article.isPublic} />
                  </TableRowColumn>
                  <TableRowColumn>{article.date.toString()}</TableRowColumn>
                  <TableRowColumn>
                    {article.publicDate && article.publicDate.toString()}
                  </TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

AdminNews.propTypes = {
  articles: PropTypes.array,
  goTo: PropTypes.func,
};

export default AdminNews;
