#react nugg multiple strain example

var FirstStrain = React.createClass({
    render: function() {
        return <div>Presidential OG</div>;
    }
});

var SecondStrain = React.createClass({
    render: function() {
        return <div>Girl Scout Cookie</div>;
    }
});

var MainOrder = React.createClass({
    render: function() {
        return <div>
            <FirstStrain />
            <SecondStrain />
        </div>;
    }
});
