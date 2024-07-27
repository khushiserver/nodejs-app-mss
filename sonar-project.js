const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://3.110.106.24:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	    'sonar.login': 'sqa_4ec189d01ce649ca507c60a533640e4d549dfcbf',
	    //'sonar.login': 'admin',
	    //'sonar.password': '9518954751',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
