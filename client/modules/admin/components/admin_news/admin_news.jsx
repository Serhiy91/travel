import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import AdminNewsItem from './admin_news_item.jsx';
import T from '/lib/i18n';
import {
  Table, TableBody, TableHeader, TableHeaderColumn, TableRow,
} from 'material-ui/Table';

class AdminNews extends React.Component {
  render() {
    const { articles, goTo, togglePublicState } = this.props;
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

          <Table selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn className="col-number">№</TableHeaderColumn>
                <TableHeaderColumn><T>title</T></TableHeaderColumn>
                <TableHeaderColumn className="col-date"><T>date_create</T></TableHeaderColumn>
                <TableHeaderColumn className="col-date"><T>public_date</T></TableHeaderColumn>
                <TableHeaderColumn className="col-toggle"><T>public_status</T></TableHeaderColumn>
              </TableRow>
            </TableHeader>

            <TableBody showRowHover displayRowCheckbox={false}>
              {articles && articles.map((article, i) => (
                <AdminNewsItem
                  key={article._id}
                  article={article}
                  i={i}
                  togglePublicState={togglePublicState}
                  goTo={goTo}
                />
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
  togglePublicState: PropTypes.func,
};

export default AdminNews;
