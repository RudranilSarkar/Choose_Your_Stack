import psycopg2

def postgreconnect(db_configuration):
    'Function to connect Postgre'
    try:
        conn_str = 'dbname='+'\''+db_configuration['dbname']+'\' '+'port='+'\''+db_configuration['port']+'\' '+'user='+'\''+db_configuration['user']+'\' '+'password='+'\''+db_configuration['password']+'\' '+'host='+'\''+db_configuration['host']+'\''
        conn = psycopg2.connect(conn_str)
        conn.set_client_encoding('UTF8')
    except Exception as v_excpt:
        return 'failure'
    return conn
    
def postgreexec(conns, v_query_stmt):
    'This function performs data fetching from Postgre tables'
    try:
        cur = conns.cursor()
    #Extracting data from Postgre table
        cur.execute(v_query_stmt)
        cur.close()
        return 'success'
    except Exception as v_excpt:
        return 'failure'
#################################################################################################################################
