import subprocess
import sys

add: str = sys.argv[1]
commit: str = sys.argv[2]
branch: str = sys.argv[3]


def run_command(command: str):
    print(command)
    process = subprocess.Popen(command.split(), stdout=subprocess.PIPE)
    print(str(process.args))
    if command.startswith("git push"):
        output, error = process.communicate()
    else:
        output, error = process.communicate()
    try:
        output = bytes(output).decode()
        error = bytes(error).decode()
        if not output:
            print("output: " + output)
        print("error: " + error)
    except TypeError:
        print()


def main():
    global add
    global commit
    global branch
    if add == "" or add == " ":
        add = "."
    if branch == "":
        branch = "master"
    print("add: '" + add + "' commit: '" + commit + "' branch: '" + branch + "'")

    command = "git add " + add
    run_command(command)

    commit = commit.replace(" ", "''")
    command = 'git commit -m "' + commit + '"'
    run_command(command)

    command = "git push origin " + branch
    run_command(command)


if __name__ == '__main__':
    main()