#!/bin/bash



echo "how many pages do you want to create,please iuput number below:"
echo `pwd`
read PAGES
ROOTFILE=`pwd`
touch index.html


#init index.html template
echo '<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="description" content="">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<title>Title</title>
<link rel="stylesheet" href="styles/common/reset.css">
<link rel="stylesheet" href="styles/common/main.css">
<link rel="stylesheet" href="styles/index/style.css">
</head>
<body>

</body>
<script src="scripts/common/main.js"></script>
<script src="scripts/index/logic.js"></script>
</html>' >index.html



#init images/styles/srcipts
cd images
mkdir common index
for((i=1;i<=$PAGES;i++));
do
mkdir $i
done


cd $ROOTFILE/styles
mkdir common &&cd common
touch reset.css main.css
cd ..
mkdir index &&cd index
touch style.css
cd ..
for((i=1;i<=$PAGES;i++));
do
mkdir $i&&cd $i
touch style.css
cd ..
done

echo $ROOTFILE/scripts
cd $ROOTFILE/scripts
mkdir common &&cd common
touch main.js
cd ..
mkdir index &&cd index
touch logic.js
cd ..
for((i=1;i<=$PAGES;i++));
do
mkdir $i&&cd $i
touch logic.js
cd ..
done




#init htmls
cd $ROOTFILE/
for((i=1;i<=$PAGES;i++));
do
touch $i.html
echo "<!DOCTYPE html>
<html lang=\"en\">
<head>
<meta charset=\"UTF-8\">
<meta name=\"description\" content=\"\">
<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"/>
<title>Title</title>
<link rel=\"stylesheet\" href=\"styles/common/reset.css\">
<link rel=\"stylesheet\" href=\"styles/common/main.css\">
<link rel=\"stylesheet\" href=\"styles/$i/style.css\">
</head>
<body>

</body>
<script src=\"scripts/common/main.js\"></script>
<script src=\"scripts/$i/logic.js\"></script>
</html>" >$i.html
done