# Цветной подробный граф
git log --graph --decorate 

# Родительская ветка
git branch --contains 

# Переключиться на ветку интеррактивно
#
# Требуется установленый пакет `ipt`
# $ npm i -g ipt
function branch(){ 
	git branch | ipt | xargs git checkout
}

# Смержить в текущую ветвь выбранную ветвь интеррактивно
#
# Требуется установленый пакет `ipt`
# $ npm i -g ipt
function merge(){
	git branch | ipt | xargs git merge
}

# Удалить ветвь (локально и удаленно) интеррактивно
#
# Требуется установленый пакет `ipt`
# $ npm i -g ipt
function remove_branch(){
	Branch=$(git branch | ipt);
	echo "Branch to remove:" $Branch;
	git branch -D $Branch
	git push origin --delete $Branch
}

# Вмержить текущую ветвь в мастер и запушить мастер
# По всем правилам:
# Подмержить актуальный мастер в текущую, после текущую в мастер.
function merge_into_master() {
	Branch=$(git name-rev --name-only HEAD);
	echo "Branch name:" $Branch;

	echo "git fetch" && git fetch
	echo "git rebase origin/master" && git rebase origin/master
	echo "git checkout master" && git checkout master
	echo "git pull" && git pull
	echo "git merge " $Branch && git merge $Branch
	echo "git push to master" && git push
}
